namespace ExpenseTracker.Api.Models;

public sealed class Expense
{
    public Guid Id { get; set; }
    public string OwnerId { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Category { get; set; } = string.Empty;
    public DateTimeOffset Date { get; set; }
    public string? Note { get; set; }
    public bool IsTravelExpense { get; set; }
    public decimal? OriginalAmount { get; set; }
    public string? OriginalCurrency { get; set; }
    public decimal? ConvertedAmount { get; set; }
    public string? ConvertedCurrency { get; set; }
    public decimal? ExchangeRateAtPurchase { get; set; }
}