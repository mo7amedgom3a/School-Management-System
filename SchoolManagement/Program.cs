using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Repositories;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services;
using SchoolManagement.Services.Interfaces;
using AutoMapper;
using SchoolManagement.Mappings;
using Microsoft.OpenApi.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddControllersWithViews();

var connectionString = "Server=localhost;Database=SchoolDB;User=root;Password=2003";
var serverVersion = new MySqlServerVersion(new Version());
builder.Services.AddDbContext<SchoolContext>(optionBuilder => {
    optionBuilder.UseMySql(connectionString, serverVersion);
});

builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "school", Version = "v1" });
            });
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();
// Add AutoMapper and scan the assembly for profiles
builder.Services.AddAutoMapper(typeof(StudentProfile).Assembly);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "school v1"));
    app.UseHsts();
}
app.UseStaticFiles();

app.UseRouting();
app.UseEndpoints(endpoints =>
    {
            endpoints.MapControllers();
    });



app.Run();