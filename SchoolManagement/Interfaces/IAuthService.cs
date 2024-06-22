using Microsoft.AspNetCore.Identity;
using SchoolManagement.Dtos;
using SchoolManagement.Models;

namespace SchoolManagement.Services.Interfaces
{
    public interface IAuthService
{
    Task<IdentityResult> RegisterStudentAsync(StudentRegisterDTO studentRegisterDTO);
    Task<IdentityResult> RegisterTeacherAsync(TeacherRegisterDTO teacherRegisterDTO);
    Task<string> LoginUserAsync(LoginDTO loginDTO);
    Task LogoutUserAsync();
}

}