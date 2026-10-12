using ExpenseTracker.Api.Models;

namespace ExpenseTracker.Api.Contracts;

/// <summary>An expense visible to its owner.</summary>
public sealed record ExpenseResponse(
    Guid Id,
    string Title,
    decimal Amount,
    string Category,
    DateTimeOffset Date,
    string? Note,
    bool IsTravelExpense,
    decimal? OriginalAmount,
    string? OriginalCurrency,
    decimal? ConvertedAmount,
    string? ConvertedCurrency,
    decimal? ExchangeRateAtPurchase)
{
    public static ExpenseResponse From(Expense expense) => new(
        expense.Id,
        expense.Title,
        expense.Amount,
        expense.Category,
        expense.Date,
        expense.Note,
        expense.IsTravelExpense,
        expense.OriginalAmount,
        expense.OriginalCurrency,
        expense.ConvertedAmount,
        expense.ConvertedCurrency,
        expense.ExchangeRateAtPurchase);
}

/// <summary>Total spending and category totals for a date range.</summary>
public sealed record ExpenseSummaryResponse(
    DateTimeOffset From,
    DateTimeOffset To,
    decimal Total,
    int Count,
    IReadOnlyList<CategorySpendResponse> Categories);

/// <summary>Spending total for one category.</summary>
public sealed record CategorySpendResponse(string Category, decimal Total);