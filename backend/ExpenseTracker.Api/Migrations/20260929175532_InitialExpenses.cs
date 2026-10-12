using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExpenseTracker.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialExpenses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "expenses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Title = table.Column<string>(type: "character varying(160)", maxLength: 160, nullable: false),
                    Amount = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    Category = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    Date = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    Note = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    IsTravelExpense = table.Column<bool>(type: "boolean", nullable: false),
                    OriginalAmount = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: true),
                    OriginalCurrency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: true),
                    ConvertedAmount = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: true),
                    ConvertedCurrency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: true),
                    ExchangeRateAtPurchase = table.Column<decimal>(type: "numeric(18,8)", precision: 18, scale: 8, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_expenses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_expenses_OwnerId_Date",
                table: "expenses",
                columns: new[] { "OwnerId", "Date" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "expenses");
        }
    }
}
