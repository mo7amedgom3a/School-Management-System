using Microsoft.AspNetCore.Identity;
using SchoolManagement.Models;
using SchoolManagement.Data;
using SchoolManagement.Dtos;
using SchoolManagement.Services.Interfaces;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace SchoolManagement.Services
{
    public class AuthService : IAuthService
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly SchoolContext _context;


    public AuthService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, SchoolContext context, IConfiguration configuration)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
        _configuration = configuration;

    }
    public async Task<string> GenerateJwtToken(IdentityUser user, string role)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Role, role), // add role to the token
        };
        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(3),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    
    public async Task<IdentityResult> RegisterStudentAsync(StudentRegisterDTO studentRegisterDTO)
    {
        var user = new IdentityUser { UserName = studentRegisterDTO.Username };

        var result = await _userManager.CreateAsync(user, studentRegisterDTO.Password);
        var role = new IdentityRole { Name = "Student", Id = user.Id };

        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(user, "Student");

            var student = new Student
            {
                FirstName = studentRegisterDTO.FirstName,
                LastName = studentRegisterDTO.LastName,
                Gender = studentRegisterDTO.Gender,
                BirthDate = studentRegisterDTO.BirthDate,
                Address = studentRegisterDTO.Address,
                ImgUrl = studentRegisterDTO.ImgUrl,
                DeptId = studentRegisterDTO.DeptId,
                CurrentYear = studentRegisterDTO.CurrentYear,
                UserId = user.Id
            };
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
        }

        return result;
    }

    public async Task<IdentityResult> RegisterTeacherAsync(TeacherRegisterDTO teacherRegisterDTO)
    {
        var user = new IdentityUser { UserName = teacherRegisterDTO.Username };
        var role = new IdentityRole { Name = "Teacher" , Id = user.Id};
        var result = await _userManager.CreateAsync(user, teacherRegisterDTO.Password);

        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(user, "Teacher");

            var teacher = new Teacher
            {
                FirstName = teacherRegisterDTO.FirstName,
                LastName = teacherRegisterDTO.LastName,
                Address = teacherRegisterDTO.Address,
                ImgUrl = teacherRegisterDTO.ImgUrl,
                Specialization = teacherRegisterDTO.Specialization,
                Gender = teacherRegisterDTO.Gender,
                BirthDate = teacherRegisterDTO.BirthDate,
                DeptId = teacherRegisterDTO.DeptId,
                UserId = user.Id
                
            };
            _context.Teachers.Add(teacher);
            await _context.SaveChangesAsync();
        }

        return result;
    }

    public async Task<string> LoginUserAsync(LoginDTO loginDTO)
    {
        var result = await _signInManager.PasswordSignInAsync(loginDTO.Username, loginDTO.Password, false, false);
        var role = await _userManager.GetRolesAsync(await _userManager.FindByNameAsync(loginDTO.Username));
        
        if (result.Succeeded)
        {
            var user = await _userManager.FindByNameAsync(loginDTO.Username);
            return await GenerateJwtToken(user, role[0]);
            
        }
        return null;
    }
    public async Task LogoutUserAsync()
    {
        await _signInManager.SignOutAsync();
    }
}


}