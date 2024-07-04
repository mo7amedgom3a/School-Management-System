using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;
        private readonly IMapper _mapper;

        public TeacherController(ITeacherService teacherService, IMapper mapper)
        {
            _teacherService = teacherService;
            _mapper = mapper;
        }

        // GET: api/teacher
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeacherDto>>> GetAllTeachers()
        {
            var teachers = await _teacherService.GetAllTeachersAsync();
            var teacherDtos = _mapper.Map<IEnumerable<TeacherDto>>(teachers);
            return Ok(teacherDtos);
        }

        // GET: api/teacher/{id}
        [Authorize(Roles = "Teacher, Admin")]
        [HttpGet("{id}")]
        public async Task<ActionResult<TeacherDto>> GetTeacherById(int id)
        {
            var teacher = await _teacherService.GetTeacherByIdAsync(id);   
            // Get the user ID from the JWT token
            var userId = "";
            foreach (Claim claim in User.Claims)
            {
                if (claim.Type == ClaimTypes.NameIdentifier)
                {
                    userId = claim.Value;
                }
            }
            if (userId != teacher.UserId)
            {
                return Unauthorized();
            }
            if (teacher == null)
                return NotFound();
            
            var teacherDto = _mapper.Map<TeacherDto>(teacher);
            return Ok(teacherDto);
        }

        // POST: api/teacher
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<TeacherDto>> AddTeacher(TeacherCreateUpdateDto teacherDto)
        {
            var teacher = _mapper.Map<Teacher>(teacherDto);
            var createdTeacher = await _teacherService.AddTeacherAsync(teacher);
            var createdTeacherDto = _mapper.Map<TeacherDto>(createdTeacher);
            return CreatedAtAction(nameof(GetTeacherById), new { id = createdTeacher.Id }, createdTeacherDto);
        }

        // PUT: api/teacher/{id}
        [Authorize(Roles = "Teacher")]
        [HttpPut("{id}")]
        public async Task<ActionResult<TeacherDto>> UpdateTeacher(int id, TeacherCreateUpdateDto teacherDto)
        {
            var teacher = _mapper.Map<Teacher>(teacherDto);
            teacher.Id = id;

            var updatedTeacher = await _teacherService.UpdateTeacherAsync(teacher);
            if (updatedTeacher == null)
                return NotFound();

            var updatedTeacherDto = _mapper.Map<TeacherDto>(updatedTeacher);
            return Ok(updatedTeacherDto);
        }

        // DELETE: api/teacher/{id}
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            var result =  await _teacherService.DeleteTeacherAsync(id);
            if (!result)
                return NotFound();
            return Ok();
        }
        [HttpGet("Teacher/{username}")]
        public async Task<ActionResult<int>> GetTeacherIdFromUsername(string username)
        {
            var teacherId = await _teacherService.GetTeacherIdFromUsername(username);
            if (teacherId == 0)
                return NotFound();
            return Ok(teacherId);
        }
    }
}
