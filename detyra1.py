"""Simple expense tracker program"""

import json
import os
from datetime import datetime

DATA_FILE = os.path.join(os.path.dirname(__file__), "expenses.json")


def load_expenses():
    """Load all saved expenses from the JSON file."""
    if not os.path.exists(DATA_FILE):
        return []

    try:
        with open(DATA_FILE, "r", encoding="utf-8") as file:
            data = json.load(file)
        if isinstance(data, list):
            return data
    except (json.JSONDecodeError, OSError):
        pass

    return []


def save_expenses(expenses):
    """Save expenses to the JSON file."""
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(expenses, file, indent=2)


def add_expense(expenses):
    """Add a new expense entry."""
    name = input("Expense name: ").strip()
    while not name:
        print("Name cannot be empty.")
        name = input("Expense name: ").strip()

    while True:
        amount_input = input("Amount: ").strip()
        try:
            amount = float(amount_input)
            if amount > 0:
                break
            print("Amount must be greater than zero.")
        except ValueError:
            print("Please enter a valid number.")

    category = input("Category: ").strip() or "General"
    date_input = input("Date (YYYY-MM-DD, press Enter for today): ").strip()
    date_value = date_input or datetime.now().strftime("%Y-%m-%d")

    expenses.append({
        "name": name,
        "amount": round(amount, 2),
        "category": category,
        "date": date_value,
    })

    save_expenses(expenses)
    print(f"Added: {name} - {amount:.2f} €")


def list_expenses(expenses):
    """Show all recorded expenses."""
    if not expenses:
        print("No expenses recorded yet.")
        return

    print("\nExpenses:")
    for index, item in enumerate(expenses, start=1):
        print(f"{index}. {item['date']} | {item['category']:<12} | {item['name']:<20} | {item['amount']:.2f} €")

    total = sum(item["amount"] for item in expenses)
    print(f"\nTotal spent: {total:.2f} €")


def show_total(expenses):
    """Display total expense amount."""
    total = sum(item["amount"] for item in expenses)
    print(f"Total expenses: {total:.2f} €")


def category_summary(expenses):
    """Display total per category."""
    categories = {}
    for item in expenses:
        category = item["category"].title()
        categories[category] = categories.get(category, 0) + item["amount"]

    if not categories:
        print("No expenses to summarize.")
        return

    print("\nCategory summary:")
    for category, total in sorted(categories.items()):
        print(f"- {category}: {total:.2f} €")


def main():
    """Main menu loop."""
    expenses = load_expenses()

    while True:
        print("\n===== Expense Tracker =====")
        print("1. Add expense")
        print("2. Show all expenses")
        print("3. Show total")
        print("4. Category summary")
        print("5. Exit")

        choice = input("Choose an option: ").strip()

        if choice == "1":
            add_expense(expenses)
        elif choice == "2":
            list_expenses(expenses)
        elif choice == "3":
            show_total(expenses)
        elif choice == "4":
            category_summary(expenses)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please select 1-5.")


if __name__ == "__main__":
    main()
