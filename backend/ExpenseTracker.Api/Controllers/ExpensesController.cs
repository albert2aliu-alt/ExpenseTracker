using System.Security.Claims;
using ExpenseTracker.Api.Contracts;
using ExpenseTracker.Api.Data;
using ExpenseTracker.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTracker.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/expenses")]
public sealed class ExpensesController(ExpensesDbContext dbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<ExpenseResponse>>> List(
        [FromQuery] DateTimeOffset? from,
        [FromQuery] DateTimeOffset? to,
        [FromQuery] string? category,
        CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        if (from.HasValue != to.HasValue || (from.HasValue && from >= to))
        {
            return BadRequest(new { error = "Provide both from and to dates, with from earlier than to." });
        }

        var query = dbContext.Expenses.AsNoTracking().Where(expense => expense.OwnerId == ownerId);
        if (from.HasValue && to.HasValue)
        {
            query = query.Where(expense => expense.Date >= from && expense.Date < to);
        }

        if (!string.IsNullOrWhiteSpace(category))
        {
            query = query.Where(expense => expense.Category == category.Trim());
        }

        var expenses = await query
            .OrderByDescending(expense => expense.Date)
            .ToListAsync(cancellationToken);

        return Ok(expenses.Select(ExpenseResponse.From).ToArray());
    }

    [HttpGet("summary")]
    public async Task<ActionResult<ExpenseSummaryResponse>> Summary(
        [FromQuery] DateTimeOffset? from,
        [FromQuery] DateTimeOffset? to,
        CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        if (from.HasValue != to.HasValue)
        {
            return BadRequest(new { error = "Provide both from and to dates, or neither." });
        }

        if (!from.HasValue)
        {
            var now = DateTimeOffset.UtcNow;
            from = new DateTimeOffset(now.Year, now.Month, 1, 0, 0, 0, TimeSpan.Zero);
            to = from.Value.AddMonths(1);
        }

        if (from >= to)
        {
            return BadRequest(new { error = "The from date must be earlier than the to date." });
        }

        var expenses = dbContext.Expenses.AsNoTracking()
            .Where(expense => expense.OwnerId == ownerId && expense.Date >= from && expense.Date < to);

        var total = await expenses.SumAsync(expense => (decimal?)expense.Amount, cancellationToken) ?? 0;
        var count = await expenses.CountAsync(cancellationToken);
        var categories = await expenses
            .GroupBy(expense => expense.Category)
            .Select(group => new CategorySpendResponse(group.Key, group.Sum(expense => expense.Amount)))
            .OrderByDescending(categoryTotal => categoryTotal.Total)
            .ToListAsync(cancellationToken);

        return Ok(new ExpenseSummaryResponse(from.Value, to!.Value, total, count, categories));
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ExpenseResponse>> GetById(Guid id, CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        var expense = await dbContext.Expenses.AsNoTracking()
            .SingleOrDefaultAsync(item => item.Id == id && item.OwnerId == ownerId, cancellationToken);

        return expense is null ? NotFound() : Ok(ExpenseResponse.From(expense));
    }

    [HttpPost]
    public async Task<ActionResult<ExpenseResponse>> Create(
        SaveExpenseRequest request,
        CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        if (request.Date == default)
        {
            return BadRequest(new { error = "A valid expense date is required." });
        }

        var expense = CreateExpense(request, ownerId);
        dbContext.Expenses.Add(expense);
        await dbContext.SaveChangesAsync(cancellationToken);

        var response = ExpenseResponse.From(expense);
        return CreatedAtAction(nameof(GetById), new { id = expense.Id }, response);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<ExpenseResponse>> Update(
        Guid id,
        SaveExpenseRequest request,
        CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        if (request.Date == default)
        {
            return BadRequest(new { error = "A valid expense date is required." });
        }

        var expense = await dbContext.Expenses
            .SingleOrDefaultAsync(item => item.Id == id && item.OwnerId == ownerId, cancellationToken);

        if (expense is null)
        {
            return NotFound();
        }

        expense.Title = request.Title.Trim();
        expense.Amount = request.Amount;
        expense.Category = request.Category.Trim();
        expense.Date = request.Date;
        expense.Note = string.IsNullOrWhiteSpace(request.Note) ? null : request.Note.Trim();
        expense.IsTravelExpense = request.IsTravelExpense;
        expense.OriginalAmount = request.OriginalAmount;
        expense.OriginalCurrency = NormalizeCurrency(request.OriginalCurrency);
        expense.ConvertedAmount = request.ConvertedAmount;
        expense.ConvertedCurrency = NormalizeCurrency(request.ConvertedCurrency);
        expense.ExchangeRateAtPurchase = request.ExchangeRateAtPurchase;

        await dbContext.SaveChangesAsync(cancellationToken);
        return Ok(ExpenseResponse.From(expense));
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
    {
        var ownerId = GetOwnerId();
        if (ownerId is null)
        {
            return Unauthorized();
        }

        var expense = await dbContext.Expenses
            .SingleOrDefaultAsync(item => item.Id == id && item.OwnerId == ownerId, cancellationToken);

        if (expense is null)
        {
            return NotFound();
        }

        dbContext.Expenses.Remove(expense);
        await dbContext.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    private string? GetOwnerId() =>
        User.FindFirstValue("sub") ?? User.FindFirstValue(ClaimTypes.NameIdentifier);

    private static Expense CreateExpense(SaveExpenseRequest request, string ownerId) => new()
    {
        Id = Guid.NewGuid(),
        OwnerId = ownerId,
        Title = request.Title.Trim(),
        Amount = request.Amount,
        Category = request.Category.Trim(),
        Date = request.Date,
        Note = string.IsNullOrWhiteSpace(request.Note) ? null : request.Note.Trim(),
        IsTravelExpense = request.IsTravelExpense,
        OriginalAmount = request.OriginalAmount,
        OriginalCurrency = NormalizeCurrency(request.OriginalCurrency),
        ConvertedAmount = request.ConvertedAmount,
        ConvertedCurrency = NormalizeCurrency(request.ConvertedCurrency),
        ExchangeRateAtPurchase = request.ExchangeRateAtPurchase
    };

    private static string? NormalizeCurrency(string? currency) =>
        string.IsNullOrWhiteSpace(currency) ? null : currency.Trim().ToUpperInvariant();
}