using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using ExpenseTracker.Api.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<ExpensesDbContext>(options =>
	options.UseNpgsql(builder.Configuration.GetConnectionString("Expenses")));

builder.Services
	.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
	.AddJwtBearer(options =>
	{
		options.MapInboundClaims = false;
		options.Authority = builder.Configuration["Authentication:Authority"];
		options.Audience = builder.Configuration["Authentication:Audience"];
		options.RequireHttpsMetadata = !builder.Environment.IsDevelopment();
	});

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
