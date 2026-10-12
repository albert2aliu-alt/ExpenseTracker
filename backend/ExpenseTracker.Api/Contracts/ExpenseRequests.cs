using System.ComponentModel.DataAnnotations;

namespace ExpenseTracker.Api.Contracts;

/// <summary>Fields required to create or replace an expense.</summary>
public sealed record SaveExpenseRequest
{
    [Required, StringLength(160, MinimumLength = 1)]
    public required string Title { get; init; }

    [Range(typeof(decimal), "0.01", "9999999999999999")]
    public decimal Amount { get; init; }

    [Required, StringLength(80, MinimumLength = 1)]
    public required string Category { get; init; }

    public DateTimeOffset Date { get; init; }

    [StringLength(2000)]
    public string? Note { get; init; }

    public bool IsTravelExpense { get; init; }

    [Range(typeof(decimal), "0.01", "9999999999999999")]
    public decimal? OriginalAmount { get; init; }

    [StringLength(3, MinimumLength = 3)]
    public string? OriginalCurrency { get; init; }

    [Range(typeof(decimal), "0.01", "9999999999999999")]
    public decimal? ConvertedAmount { get; init; }

    [StringLength(3, MinimumLength = 3)]
    public string? ConvertedCurrency { get; init; }

    [Range(typeof(decimal), "0.00000001", "9999999999999999")]
    public decimal? ExchangeRateAtPurchase { get; init; }
}