using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly SchoolContext _context;

        public TeacherService(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Teacher>> GetAllTeachersAsync()
        {
            return await _context.Teachers.ToListAsync();
        }

        public async Task<Teacher> GetTeacherByIdAsync(int id)
        {
            return await _context.Teachers.FindAsync(id);
        }

        public async Task<Teacher> AddTeacherAsync(Teacher teacher)
        {
            _context.Teachers.Add(teacher);
            await _context.SaveChangesAsync();
            return teacher;
        }

        public async Task<Teacher> UpdateTeacherAsync(Teacher teacher)
        {
            _context.Teachers.Update(teacher);
            await _context.SaveChangesAsync();
            return teacher;
        }

        public async Task DeleteTeacherAsync(int id)
        {
            var teacher = await _context.Teachers.FindAsync(id);
            if (teacher != null)
            {
                _context.Teachers.Remove(teacher);
                await _context.SaveChangesAsync();
            }
        }

        // Get a list of students for the courses taught by the teacher
        public async Task<IEnumerable<StudentsDto>> GetStudentsByTeacherIdAsync(int teacherId)
        {
            var students = await _context.Students
                .Join(_context.Departments, s => s.DeptId, d => d.Id, (s, d) => new { Student = s, Department = d })
                .Join(_context.Courses, sd => sd.Department.Id, c => c.DeptId, (sd, c) => new { sd.Student, sd.Department, Course = c })
                .Where(sd => sd.Course.TeacherId == teacherId)
                .Select(sd => new StudentsDto
                {
                    Id = sd.Student.Id,
                    deptId = sd.Department.Id,
                    CourseId = sd.Course.Id,
                    FirstName = sd.Student.FirstName,
                    LastName = sd.Student.LastName,
                    DepartmentName = sd.Department.Name,
                    CourseName = sd.Course.Name
                })
                .ToListAsync();

            return students;
        }

        // Get a list of homeworks created by the teacher
        public async Task<IEnumerable<HomeworksDto>> GetHomeworksByTeacherIdAsync(int teacherId)
        {
            var homeworks = await _context.Homeworks
            .Join(_context.Courses, hw => hw.CourseId, c => c.Id, (hw, c) => new { Homework = hw, Course = c })
            .Where(hw => hw.Homework.TeacherId == teacherId)
            .Select(hw => new HomeworksDto
            {
                Id = hw.Homework.Id,
                CourseId = hw.Course.Id,
                CourseName = hw.Course.Name,
                Title = hw.Homework.Title,
                Description = hw.Homework.Description
            })
            .ToListAsync();
            
            return homeworks;
        }

        // Get a list of exams created by the teacher
        public async Task<IEnumerable<Exam>> GetExamsByTeacherIdAsync(int teacherId)
        {
            return await _context.Exams
                .Where(ex => ex.TeacherId == teacherId)
                .ToListAsync();
        }

        // Get a list of grades for students in courses taught by the teacher
        public async Task<IEnumerable<StudentGradeDto>> GetGradesByTeacherIdAsync(int teacherId)
        {
            var grades = await _context.Students
            .Join(_context.StudentCourses, s => s.Id, sc => sc.StudentId, (s, sc) => new { Student = s, StudentCourse = sc })
            .Join(_context.Courses, sc => sc.StudentCourse.CourseId, c => c.Id, (sc, c) => new { sc.Student, sc.StudentCourse, Course = c })
            .Where(sc => sc.Course.TeacherId == teacherId)
            .Select(sc => new StudentGradeDto
            {
            StudentName = sc.Student.FirstName + " " + sc.Student.LastName,
            CourseName = sc.Course.Name,
            Grade = sc.StudentCourse.StudentMark
            })
            .ToListAsync();
            
            return grades;
        }
    }
}
