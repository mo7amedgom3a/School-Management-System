using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    [Authorize(Roles = "Teacher")]
    [ApiController]
    [Route("api/[controller]")]
    public class TeacherDashboardController : ControllerBase
    {
        private readonly ITeacherService _teacherService;

        public TeacherDashboardController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpGet("{teacherId}/students")]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudentsByTeacher(int teacherId)
        {
            var students = await _teacherService.GetStudentsByTeacherIdAsync(teacherId);
            return Ok(students);
        }

        [HttpGet("{teacherId}/homeworks")]
        public async Task<ActionResult<IEnumerable<Homework>>> GetHomeworksByTeacher(int teacherId)
        {
            var homeworks = await _teacherService.GetHomeworksByTeacherIdAsync(teacherId);
            return Ok(homeworks);
        }

        [HttpGet("{teacherId}/exams")]
        public async Task<ActionResult<IEnumerable<Exam>>> GetExamsByTeacher(int teacherId)
        {
            var exams = await _teacherService.GetExamsByTeacherIdAsync(teacherId);
            return Ok(exams);
        }

        [HttpGet("{teacherId}/grades")]
        public async Task<ActionResult<IEnumerable<StudentGradeDto>>> GetGradesByTeacher(int teacherId)
        {
            var grades = await _teacherService.GetGradesByTeacherIdAsync(teacherId);
            return Ok(grades);
        }
        [HttpGet("{teacherId}/courses")]
        public async Task<ActionResult<IEnumerable<Course>>> GetCoursesByTeacher(int teacherId)
        {
            var courses = await _teacherService.GetCoursesByTeacherIdAsync(teacherId);
            return Ok(courses);
        }
    }
}
