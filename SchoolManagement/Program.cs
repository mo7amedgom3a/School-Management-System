using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using SchoolManagement.Data;
using SchoolManagement.Repositories;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services;
using SchoolManagement.Services.Interfaces;
using AutoMapper;
using SchoolManagement.Mappings;
using SchoolManagement.Profiles;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews();

var connectionString = "Server=localhost;Database=SchoolDB;User=root;Password=2003";
var serverVersion = new MySqlServerVersion(new Version());

// Configure DbContext
builder.Services.AddDbContext<SchoolContext>(optionBuilder => {
    optionBuilder.UseMySql(connectionString, serverVersion);
});

// Configure Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
        .AddEntityFrameworkStores<SchoolContext>()
        .AddDefaultTokenProviders();

// Configure Authentication with JWT
builder.Services.AddAuthentication(options => {
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "http://localhost:5000",
        ValidAudience = "http://localhost:5000",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("printf('%s','open');lgdkfnhgljgdflkflkjklhjlkflglkhhjljglgkjhlgkdfjlkjlyhglfjfldjlhjlkhd"))
    };
});

// Configure Identity Options
builder.Services.Configure<IdentityOptions>(options => {
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = true;
    options.SignIn.RequireConfirmedAccount = false;
});

// Add Authorization Policies
builder.Services.AddAuthorization(options => {
    options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
    options.AddPolicy("Teacher", policy => policy.RequireRole("Teacher"));
    options.AddPolicy("Student", policy => policy.RequireRole("Student"));
});

// Configure CORS
builder.Services.AddCors(options => {
    options.AddPolicy("AllowSpecificOrigin", builder => {
        builder.WithOrigins("http://localhost:3001", "http://localhost:3000")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Add services for DI
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IStudentService, StudentService>();

builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();

builder.Services.AddScoped<ICourseRepository, CourseRepository>();
builder.Services.AddScoped<ICourseService, CourseService>();

builder.Services.AddScoped<ITeacherRepository, TeacherRepository>();
builder.Services.AddScoped<ITeacherService, TeacherService>();

builder.Services.AddScoped<IHomeworkRepository, HomeworkRepository>();
builder.Services.AddScoped<IHomeworkService, HomeworkService>();

builder.Services.AddScoped<IExamRepository, ExamRepository>();
builder.Services.AddScoped<IExamService, ExamService>();

builder.Services.AddScoped<IAttendanceRepository, AttendanceRepository>();
builder.Services.AddScoped<IAttendanceService, AttendanceService>();

builder.Services.AddScoped<IStudentCourseRepository, StudentCourseRepository>();
builder.Services.AddScoped<IStudentCourseService, StudentCourseService>();

builder.Services.AddScoped<IStudentsHomeworkRepository, StudentsHomeworkRepository>();
builder.Services.AddScoped<IStudentsHomeworkService, StudentsHomeworkService>();

builder.Services.AddScoped<ISalaryRepository, SalaryRepository>();
builder.Services.AddScoped<ISalaryService, SalaryService>();

builder.Services.AddScoped<IAdminService, AdminService>();
builder.Services.AddScoped<IAuthService, AuthService>();

// Add AutoMapper and scan the assembly for profiles
builder.Services.AddAutoMapper(typeof(StudentProfile).Assembly);
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

// Configure Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "school", Version = "v1" });
});

// Build the application
var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "school v1"));
    app.UseHsts();
}

app.UseStaticFiles();
app.UseCors("AllowSpecificOrigin");
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

// Ensure roles exist and create the admin account on application startup
using (var scope = app.Services.CreateScope()) {
    var services = scope.ServiceProvider;
    var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
    var userManager = services.GetRequiredService<UserManager<IdentityUser>>();

    // Ensure roles exist
    var roles = new[] { "Admin", "Teacher", "Student" };
    foreach (var role in roles) {
        if (!await roleManager.RoleExistsAsync(role)) {
            await roleManager.CreateAsync(new IdentityRole(role));
        }
    }

    // Create the admin user if not exists
    var adminUsername = "MohamedGom3a";
    var adminPassword = "printf('helloWORLD123')"; // Use a secure password generator for real applications
    var adminUser = await userManager.FindByNameAsync(adminUsername);

    if (adminUser == null) {
        adminUser = new IdentityUser {
            UserName = adminUsername
        };
        var result = await userManager.CreateAsync(adminUser, adminPassword);
        if (result.Succeeded) {
            await userManager.AddToRoleAsync(adminUser, "Admin");
        } else {
            // Handle the failure case, perhaps log or throw an exception
            Console.WriteLine($"Failed to create admin user: {string.Join(", ", result.Errors.Select(e => e.Description))}");
        }
    } else {
        // Admin user already exists, you may want to log this information
        Console.WriteLine("Admin user already exists");
    }
}

app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});

// Run the application
app.Run();
