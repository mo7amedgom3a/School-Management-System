using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register/student")]
        public async Task<IActionResult> RegisterStudent(StudentRegisterDTO studentRegisterDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (studentRegisterDTO.Password != studentRegisterDTO.ConfirmPassword)
            {
                return BadRequest("Passwords do not match.");
            }

            var result = await _authService.RegisterStudentAsync(studentRegisterDTO);

            if (result.Succeeded)
            {
                return Created("Student registered successfully", null);
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(ModelState);
        }

        [HttpPost("register/teacher")]
        public async Task<IActionResult> RegisterTeacher(TeacherRegisterDTO teacherRegisterDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (teacherRegisterDTO.Password != teacherRegisterDTO.ConfirmPassword)
            {
                return BadRequest("Passwords do not match.");
            }

            var result = await _authService.RegisterTeacherAsync(teacherRegisterDTO);

            if (result.Succeeded)
            {
                return Created("Teacher registered successfully", null);
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
            return BadRequest(ModelState);
        }

   [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO loginDTO)
    {
        var token = await _authService.LoginUserAsync(loginDTO);

        if (token == null)
        {
            return Unauthorized("Invalid login attempt.");
        }

        return Ok(new { Token = token });
    } 

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _authService.LogoutUserAsync();
            return Ok("User logged out successfully");
        }
 
    }
}
