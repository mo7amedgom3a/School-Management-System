using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    [Authorize(Roles = "Teacher" )]
    [ApiController]
    [Route("api/[controller]")]
    public class StudentCourseController : ControllerBase
    {
        private readonly IStudentCourseService _studentCourseService;
        private readonly IMapper _mapper;

        public StudentCourseController(IStudentCourseService studentCourseService, IMapper mapper)
        {
            _studentCourseService = studentCourseService;
            _mapper = mapper;
        }

        // GET: api/studentcourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentCourseDto>>> GetAllStudentCourses()
        {
            var studentCourses = await _studentCourseService.GetAllStudentCoursesAsync();
            return Ok(studentCourses);
        }
        [HttpGet("{courseId}")]
        public async Task<ActionResult<IEnumerable<StudentCourseDto>>> GetStudentsByCourseId(int courseId)
        {
            var studentCourses = await _studentCourseService.GetStudentsByCourseId(courseId);
            return Ok(studentCourses);
        }

        // GET: api/studentcourses/{studentId}/{courseId}
        [HttpGet("{studentId}/{courseId}")]
        public async Task<ActionResult<StudentCourseDto>> GetStudentCourseById(int studentId, int courseId)
        {
            var studentCourse = await _studentCourseService.GetStudentCourseByIdAsync(studentId, courseId);
            if (studentCourse == null)
            {
                return NotFound();
            }
            return Ok(studentCourse);
        }

        // POST: api/studentcourse
        [HttpPost]
        public async Task<ActionResult<StudentCourseCreateUpdateDto>> AddStudentCourse(StudentCourseCreateUpdateDto studentCourseDto)
        {
            var studentCourse = _mapper.Map<StudentCourse>(studentCourseDto);
            var newStudentCourse = await _studentCourseService.AddStudentCourseAsync(studentCourseDto);
            return CreatedAtAction(nameof(GetStudentCourseById), new { studentId = newStudentCourse.StudentId, courseId = newStudentCourse.CourseId }, newStudentCourse);
        }

        // PUT: api/studentcourse/{studentId}/{courseId}
        [HttpPut("{studentId}/{courseId}")]
        public async Task<ActionResult<StudentCourseDto>> UpdateStudentCourse(int studentId, int courseId, StudentCourseCreateUpdateDto studentCourseDto)
        {
            var studentCourse = _mapper.Map<StudentCourse>(studentCourseDto);
            studentCourse.StudentId = studentId;
            studentCourse.CourseId = courseId;

            var updatedStudentCourse = await _studentCourseService.UpdateStudentCourseAsync(studentCourse);
            if (updatedStudentCourse == null)
                return NotFound();

            var updatedStudentCourseDto = _mapper.Map<StudentCourseDto>(updatedStudentCourse);
            return Ok(updatedStudentCourseDto);
        }

        // DELETE: api/studentcourse/{studentId}/{courseId}
        [HttpDelete("{studentId}/{courseId}")]
        public async Task<IActionResult> DeleteStudentCourse(int studentId, int courseId)
        {
            await _studentCourseService.DeleteStudentCourseAsync(studentId, courseId);
            return NoContent();
        }
    }
}
