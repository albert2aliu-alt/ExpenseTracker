# Expense Tracker API

An ASP.NET Core 10 REST API for the expense records stored by the Expo app. It uses PostgreSQL through EF Core/Npgsql and scopes every expense query to the authenticated user's JWT subject claim (`sub`). Expense fields match the app's `Expense` type, including travel and currency-conversion metadata.

## Configuration

Set these values in the API process environment or a deployment secret manager:

- `ConnectionStrings__Expenses`: PostgreSQL connection string. For Supabase PostgreSQL, use its database connection string with SSL enabled.
- `Authentication__Authority`: HTTPS issuer for access tokens.
- `Authentication__Audience`: expected JWT audience (`expense-tracker-api` by default).

The existing Expo username/password login is local to the device and does not issue JWTs. The API requires a real token issuer; do not send the local username or password to this API as authentication.

## Database migration

The initial `InitialExpenses` migration is already included. Run these commands from the repository root in PowerShell. Set the connection string before applying it; `database update` requires a reachable PostgreSQL server.

```powershell
$env:ConnectionStrings__Expenses = "Host=YOUR_HOST;Database=YOUR_DATABASE;Username=YOUR_USER;Password=YOUR_PASSWORD;SSL Mode=Require"
dotnet tool install --global dotnet-ef --version 10.0.0  # only if not installed already
dotnet ef database update --project backend/ExpenseTracker.Api --startup-project backend/ExpenseTracker.Api
```

For future schema changes, run `dotnet ef migrations add <MigrationName> --project backend/ExpenseTracker.Api --startup-project backend/ExpenseTracker.Api` before `dotnet ef database update`.

## Routes

All routes require `Authorization: Bearer <access-token>`.

- `GET /api/expenses?from=<ISO-date>&to=<ISO-date>&category=<category>`: list the caller's expenses, optionally filtered by date range and category.
- `GET /api/expenses/{id}`: get one of the caller's expenses.
- `POST /api/expenses`: create an expense; returns `201 Created` and its location.
- `PUT /api/expenses/{id}`: replace an expense owned by the caller.
- `DELETE /api/expenses/{id}`: delete an expense owned by the caller.
- `GET /api/expenses/summary?from=<ISO-date>&to=<ISO-date>`: total, count, and category breakdown for the requested period; defaults to the current UTC month.

The API is not wired to the Expo screens yet. Once the app uses the same JWT provider, its expense repository can call these routes instead of only persisting to local AsyncStorage.
