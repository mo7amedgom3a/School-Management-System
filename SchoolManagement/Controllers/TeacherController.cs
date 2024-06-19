using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeacherDto>>> GetAllTeachers()
        {
            var teachers = await _teacherService.GetAllTeachersAsync();
            var teacherDtos = _mapper.Map<IEnumerable<TeacherDto>>(teachers);
            return Ok(teacherDtos);
        }

        // GET: api/teacher/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<TeacherDto>> GetTeacherById(int id)
        {
            var teacher = await _teacherService.GetTeacherByIdAsync(id);
            if (teacher == null)
                return NotFound();
            
            var teacherDto = _mapper.Map<TeacherDto>(teacher);
            return Ok(teacherDto);
        }

        // POST: api/teacher
        [HttpPost]
        public async Task<ActionResult<TeacherDto>> AddTeacher(TeacherCreateUpdateDto teacherDto)
        {
            var teacher = _mapper.Map<Teacher>(teacherDto);
            var createdTeacher = await _teacherService.AddTeacherAsync(teacher);
            var createdTeacherDto = _mapper.Map<TeacherDto>(createdTeacher);
            return CreatedAtAction(nameof(GetTeacherById), new { id = createdTeacher.Id }, createdTeacherDto);
        }

        // PUT: api/teacher/{id}
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
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            await _teacherService.DeleteTeacherAsync(id);
            return NoContent();
        }
    }
}
