using ExpenseTracker.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTracker.Api.Data;

public sealed class ExpensesDbContext(DbContextOptions<ExpensesDbContext> options) : DbContext(options)
{
    public DbSet<Expense> Expenses => Set<Expense>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var expense = modelBuilder.Entity<Expense>();
        expense.ToTable("expenses");
        expense.HasKey(item => item.Id);
        expense.Property(item => item.OwnerId).HasMaxLength(200).IsRequired();
        expense.Property(item => item.Title).HasMaxLength(160).IsRequired();
        expense.Property(item => item.Amount).HasPrecision(18, 2);
        expense.Property(item => item.Category).HasMaxLength(80).IsRequired();
        expense.Property(item => item.Date).IsRequired();
        expense.Property(item => item.Note).HasMaxLength(2000);
        expense.Property(item => item.OriginalAmount).HasPrecision(18, 2);
        expense.Property(item => item.OriginalCurrency).HasMaxLength(3);
        expense.Property(item => item.ConvertedAmount).HasPrecision(18, 2);
        expense.Property(item => item.ConvertedCurrency).HasMaxLength(3);
        expense.Property(item => item.ExchangeRateAtPurchase).HasPrecision(18, 8);
        expense.HasIndex(item => new { item.OwnerId, item.Date });
    }
}