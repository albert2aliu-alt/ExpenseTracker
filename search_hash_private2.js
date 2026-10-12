const fs = require("fs");
const path = require("path");
const root = path.join(process.cwd(), "node_modules");
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
    } else if (p.endsWith(".js") || p.endsWith(".mjs") || p.endsWith(".ts")) {
      files.push(p);
    }
  }
}
function findPrivateSyntax(txt) {
  let inSingle = false,
    inDouble = false,
    inTemplate = false,
    inLine = false,
    inBlock = false,
    escape = false;
  for (let i = 0; i < txt.length; i++) {
    const ch = txt[i];
    if (inLine) {
      if (ch === "\n") inLine = false;
      continue;
    }
    if (inBlock) {
      if (ch === "/" && txt[i - 1] === "*") inBlock = false;
      continue;
    }
    if (escape) {
      escape = false;
      continue;
    }
    if (inSingle) {
      if (ch === "\\") escape = true;
      else if (ch === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (ch === "\\") escape = true;
      else if (ch === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (ch === "\\") escape = true;
      else if (ch === "`") inTemplate = false;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      continue;
    }
    if (ch === "/" && txt[i + 1] === "/") {
      inLine = true;
      continue;
    }
    if (ch === "/" && txt[i + 1] === "*") {
      inBlock = true;
      continue;
    }
    if (ch === "#") {
      const next = txt[i + 1] || "";
      if (/[_$A-Za-z]/.test(next)) return i;
    }
  }
  return -1;
}
walk(root);
let count = 0;
for (const file of files) {
  try {
    const txt = fs.readFileSync(file, "utf8");
    if (findPrivateSyntax(txt) !== -1) {
      console.log(file);
      count++;
      if (count >= 80) break;
    }
  } catch {}
}
console.log("done", count);
