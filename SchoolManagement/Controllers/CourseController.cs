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
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;
        private readonly IMapper _mapper;

        public CourseController(ICourseService courseService, IMapper mapper)
        {
            _courseService = courseService;
            _mapper = mapper;
        }
        // GET: api/courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetAllCourses()
        {
            var courses = await _courseService.GetAllCoursesAsync();
            return Ok(courses);
        }

        // GET: api/courses/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDto>> GetCourseById(int id)
        {
            var course = await _courseService.GetCourseByIdAsync(id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }

        // POST: api/course
        [HttpPost]
        public async Task<ActionResult<Course>> AddCourse(CourseCreateUpdateDto courseDto)
        {
            var course = _mapper.Map<Course>(courseDto);
            var createdCourse = await _courseService.AddCourseAsync(course);
            var createdCourseDto = _mapper.Map<CourseDto>(createdCourse);
            return CreatedAtAction(nameof(GetCourseById), new { id = createdCourse.Id }, createdCourseDto);
        }

        // PUT: api/course/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<CourseDto>> UpdateCourse(int id, CourseCreateUpdateDto courseDto)
        {
            var course = _mapper.Map<Course>(courseDto);
            course.Id = id;

            var updatedCourse = await _courseService.UpdateCourseAsync(course);
            if (updatedCourse == null)
                return NotFound();

            var updatedCourseDto = _mapper.Map<CourseDto>(updatedCourse);
            return Ok(updatedCourseDto);
        }

        // DELETE: api/course/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            await _courseService.DeleteCourseAsync(id);
            return NoContent();
        }
    }
}
