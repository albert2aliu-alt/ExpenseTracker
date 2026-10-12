/**
 * exportReport.ts
 * Generates CSV or PDF (HTML) financial reports and shares them via the
 * native share sheet using expo-file-system + expo-sharing.
 */

import type { Expense, SavingGoal } from "@/context/AppContext";
import { File, Paths } from "expo-file-system";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExportOptions {
  format: "csv" | "pdf";
  includeExpenses: boolean;
  includeBudgets: boolean;
  includeGoals: boolean;
  dateFrom: Date | null;
  dateTo: Date | null;
  currency: string;
}

export interface BudgetEntry {
  category: string;
  limit: number;
}

export interface ExportData {
  expenses: Expense[];
  budgets: BudgetEntry[];
  savingGoals: SavingGoal[];
  income: number;
  username: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeCSV(value: string | number | undefined | null): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function filterByDate(
  expenses: Expense[],
  from: Date | null,
  to: Date | null,
): Expense[] {
  return expenses.filter((e) => {
    const d = new Date(e.date);
    if (from && d < from) return false;
    if (to) {
      const toEnd = new Date(to);
      toEnd.setHours(23, 59, 59, 999);
      if (d > toEnd) return false;
    }
    return true;
  });
}

// ─── CSV Generator ────────────────────────────────────────────────────────────

function buildCSV(data: ExportData, opts: ExportOptions): string {
  const sections: string[] = [];
  const filtered =
    opts.dateFrom || opts.dateTo
      ? filterByDate(data.expenses, opts.dateFrom, opts.dateTo)
      : data.expenses;

  const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  sections.push(`Financial Report,${escapeCSV(data.username)},${now}\n`);

  // ── Expenses ──
  if (opts.includeExpenses) {
    sections.push("EXPENSES\n");
    sections.push("Date,Title,Category,Amount,Note\n");
    if (filtered.length === 0) {
      sections.push("No expenses in this period\n");
    } else {
      filtered.forEach((e) => {
        sections.push(
          [
            escapeCSV(formatDate(e.date)),
            escapeCSV(e.title),
            escapeCSV(e.category),
            e.amount.toFixed(2),
            escapeCSV(e.note ?? ""),
          ].join(",") + "\n",
        );
      });
      const total = filtered.reduce((s, e) => s + e.amount, 0);
      sections.push(`,,Total,${total.toFixed(2)},\n`);
    }
    sections.push("\n");
  }

  // ── Budgets ──
  if (opts.includeBudgets) {
    sections.push("BUDGETS\n");
    sections.push("Category,Limit,Spent,Remaining,%Used\n");
    if (data.budgets.length === 0) {
      sections.push("No budgets configured\n");
    } else {
      data.budgets.forEach((b) => {
        const spent = data.expenses
          .filter((e) => e.category.toLowerCase() === b.category.toLowerCase())
          .reduce((s, e) => s + e.amount, 0);
        const remaining = Math.max(0, b.limit - spent);
        const pct = b.limit > 0 ? ((spent / b.limit) * 100).toFixed(1) : "0.0";
        sections.push(
          [
            escapeCSV(b.category),
            b.limit.toFixed(2),
            spent.toFixed(2),
            remaining.toFixed(2),
            `${pct}%`,
          ].join(",") + "\n",
        );
      });
    }
    sections.push("\n");
  }

  // ── Saving Goals ──
  if (opts.includeGoals) {
    sections.push("SAVING GOALS\n");
    sections.push("Title,Target,Saved,Remaining,Progress,Deadline\n");
    if (data.savingGoals.length === 0) {
      sections.push("No saving goals\n");
    } else {
      data.savingGoals.forEach((g) => {
        const remaining = Math.max(0, g.targetAmount - g.currentAmount);
        const pct =
          g.targetAmount > 0
            ? ((g.currentAmount / g.targetAmount) * 100).toFixed(1)
            : "0.0";
        sections.push(
          [
            escapeCSV(g.title),
            g.targetAmount.toFixed(2),
            g.currentAmount.toFixed(2),
            remaining.toFixed(2),
            `${pct}%`,
            escapeCSV(formatDate(g.deadline)),
          ].join(",") + "\n",
        );
      });
    }
    sections.push("\n");
  }

  return sections.join("");
}

// ─── PDF / HTML Generator ─────────────────────────────────────────────────────

function buildHTML(data: ExportData, opts: ExportOptions): string {
  const filtered =
    opts.dateFrom || opts.dateTo
      ? filterByDate(data.expenses, opts.dateFrom, opts.dateTo)
      : data.expenses;

  const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const totalExpenses = filtered.reduce((s, e) => s + e.amount, 0);
  const cur = opts.currency;

  const expenseRows =
    filtered.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No expenses in this period</td></tr>`
      : filtered
          .map(
            (e) => `
        <tr>
          <td>${formatDate(e.date)}</td>
          <td>${e.title}</td>
          <td><span class="badge">${e.category}</span></td>
          <td style="font-weight:700;color:#5A2ED4">${cur} ${e.amount.toFixed(2)}</td>
          <td style="color:#888">${e.note ?? "—"}</td>
        </tr>`,
          )
          .join("");

  const budgetRows =
    data.budgets.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No budgets configured</td></tr>`
      : data.budgets
          .map((b) => {
            const spent = data.expenses
              .filter(
                (e) => e.category.toLowerCase() === b.category.toLowerCase(),
              )
              .reduce((s, e) => s + e.amount, 0);
            const remaining = Math.max(0, b.limit - spent);
            const pct = b.limit > 0 ? (spent / b.limit) * 100 : 0;
            const barColor =
              pct >= 100 ? "#FF3B30" : pct >= 80 ? "#FF9F0A" : "#34C47C";
            return `
        <tr>
          <td>${b.category}</td>
          <td>${cur} ${b.limit.toFixed(2)}</td>
          <td>${cur} ${spent.toFixed(2)}</td>
          <td style="color:${remaining === 0 ? "#FF3B30" : "#34C47C"};font-weight:700">${cur} ${remaining.toFixed(2)}</td>
          <td>
            <div style="background:#eee;border-radius:4px;height:8px;width:100px">
              <div style="background:${barColor};border-radius:4px;height:8px;width:${Math.min(100, pct)}px"></div>
            </div>
            <span style="font-size:11px;color:#888">${pct.toFixed(1)}%</span>
          </td>
        </tr>`;
          })
          .join("");

  const goalRows =
    data.savingGoals.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No saving goals</td></tr>`
      : data.savingGoals
          .map((g) => {
            const remaining = Math.max(0, g.targetAmount - g.currentAmount);
            const pct =
              g.targetAmount > 0 ? (g.currentAmount / g.targetAmount) * 100 : 0;
            return `
        <tr>
          <td style="font-weight:600">${g.title}</td>
          <td>${cur} ${g.targetAmount.toFixed(2)}</td>
          <td style="color:#34C47C;font-weight:700">${cur} ${g.currentAmount.toFixed(2)}</td>
          <td>${cur} ${remaining.toFixed(2)}</td>
          <td>
            <div style="background:#eee;border-radius:4px;height:8px;width:100px">
              <div style="background:${g.color || "#5A2ED4"};border-radius:4px;height:8px;width:${Math.min(100, pct)}px"></div>
            </div>
            <span style="font-size:11px;color:#888">${pct.toFixed(1)}% • Due ${formatDate(g.deadline)}</span>
          </td>
        </tr>`;
          })
          .join("");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, Arial, sans-serif; font-size: 13px; color: #1a1a2e; background: #fff; }
  .header { background: linear-gradient(135deg, #5A2ED4, #3C82FF); padding: 32px 40px; color: white; }
  .header h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .header p { opacity: 0.75; margin-top: 4px; font-size: 13px; }
  .summary { display: flex; gap: 0; border-bottom: 1px solid #eee; }
  .summary-item { flex: 1; padding: 18px 24px; border-right: 1px solid #eee; }
  .summary-item:last-child { border-right: none; }
  .summary-item .label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 0.5px; text-transform: uppercase; }
  .summary-item .value { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-top: 4px; }
  .section { padding: 24px 24px 0; }
  .section-title { font-size: 13px; font-weight: 800; color: #5A2ED4; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 2px solid rgba(90,46,212,0.13); }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  th { background: #f5f5fa; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; padding: 8px 12px; text-align: left; }
  td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; vertical-align: middle; }
  .badge { background: rgba(90,46,212,0.08); color: #5A2ED4; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 20px; }
  .total-row td { font-weight: 800; background: #f5f5fa; border-top: 2px solid #eee; }
  .footer { padding: 16px 24px; color: #bbb; font-size: 11px; text-align: center; border-top: 1px solid #eee; margin-top: 8px; }
</style>
</head>
<body>
  <div class="header">
    <h1>Financial Report</h1>
    <p>@${data.username} &nbsp;&#8226;&nbsp; Generated on ${now}</p>
  </div>

  <div class="summary">
    <div class="summary-item">
      <div class="label">Total Expenses</div>
      <div class="value">${cur} ${totalExpenses.toFixed(2)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Monthly Income</div>
      <div class="value">${cur} ${data.income.toFixed(2)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Saving Goals</div>
      <div class="value">${data.savingGoals.length}</div>
    </div>
    <div class="summary-item">
      <div class="label">Budgets Active</div>
      <div class="value">${data.budgets.length}</div>
    </div>
  </div>

  ${
    opts.includeExpenses
      ? `<div class="section">
    <div class="section-title">Expenses</div>
    <table>
      <thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Amount</th><th>Note</th></tr></thead>
      <tbody>
        ${expenseRows}
        ${filtered.length > 0 ? `<tr class="total-row"><td colspan="3">Total</td><td>${cur} ${totalExpenses.toFixed(2)}</td><td></td></tr>` : ""}
      </tbody>
    </table>
  </div>`
      : ""
  }

  ${
    opts.includeBudgets
      ? `<div class="section">
    <div class="section-title">Budgets</div>
    <table>
      <thead><tr><th>Category</th><th>Limit</th><th>Spent</th><th>Remaining</th><th>Usage</th></tr></thead>
      <tbody>${budgetRows}</tbody>
    </table>
  </div>`
      : ""
  }

  ${
    opts.includeGoals
      ? `<div class="section">
    <div class="section-title">Saving Goals</div>
    <table>
      <thead><tr><th>Goal</th><th>Target</th><th>Saved</th><th>Remaining</th><th>Progress</th></tr></thead>
      <tbody>${goalRows}</tbody>
    </table>
  </div>`
      : ""
  }

  <div class="footer">Generated by ExpenseTracker App &bull; ${now}</div>
</body>
</html>`;
}

function downloadOnWeb(
  content: string,
  filename: string,
  mimeType: string,
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

// ─── Main Export Function ─────────────────────────────────────────────────────

export async function exportReport(
  data: ExportData,
  opts: ExportOptions,
): Promise<void> {
  if (opts.format === "csv") {
    const csv = buildCSV(data, opts);
    const fileName = `financial_report_${Date.now()}.csv`;

    if (Platform.OS === "web") {
      downloadOnWeb(csv, fileName, "text/csv");
      return;
    }

    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      throw new Error("Sharing is not available on this device.");
    }

    const file = new File(Paths.document, fileName);
    file.write(csv);
    await Sharing.shareAsync(file.uri, {
      mimeType: "text/csv",
      dialogTitle: "Export Financial Report (CSV)",
    });
    return;
  }

  const html = buildHTML(data, opts);

  if (Platform.OS === "web") {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      throw new Error("Pop-up blocked. Allow pop-ups to export PDF on web.");
    }
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    return;
  }

  const isAvailable = await Sharing.isAvailableAsync();
  if (!isAvailable) {
    throw new Error("Sharing is not available on this device.");
  }

  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri, {
    mimeType: "application/pdf",
    dialogTitle: "Export Financial Report (PDF)",
  });
}
