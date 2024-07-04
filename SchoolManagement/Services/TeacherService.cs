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

        public async Task<bool> DeleteTeacherAsync(int id)
        {
            var teacher = await _context.Teachers.FindAsync(id);
            if (teacher == null)
            {
                return false;
            }
            else{
                var user = await _context.Users.FindAsync(teacher.UserId);
                if (user != null)
                {
                    _context.Users.Remove(user);
                    _context.Teachers.Remove(teacher);
                    await _context.SaveChangesAsync();
                    return true;
                }
            }
            return false;
        }

        // Get a list of students for the courses taught by the teacher
        public async Task<IEnumerable<StudentsDto>> GetStudentsByTeacherIdAsync(int teacherId)
        {
            var students = await _context.Students
                .Join(_context.StudentCourses, s => s.Id, sc => sc.StudentId, (s, sc) => new { Student = s, StudentCourse = sc })
                .Join(_context.Courses, sc => sc.StudentCourse.CourseId, c => c.Id, (sc, c) => new { sc.Student, sc.StudentCourse, Course = c })
                .Where(sc => sc.Course.TeacherId == teacherId && sc.StudentCourse.CourseId == sc.Course.Id)
                .Select(sc => new StudentsDto
                {
                    Id = sc.Student.Id,
                    deptId = sc.Student.DeptId,
                    CourseId = sc.Course.Id,
                    FirstName = sc.Student.FirstName,
                    LastName = sc.Student.LastName,
                    DepartmentName = sc.Student.Department.Name,
                    CourseName = sc.Course.Name
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
        public async Task<IEnumerable<ExamDto>> GetExamsByTeacherIdAsync(int teacherId)
        {
            return await _context.Exams
                .Join(_context.Courses, ex => ex.CourseId, c => c.Id, (ex, c) => new { Exam = ex, Course = c })
                .Where(ec => ec.Exam.TeacherId == teacherId)
                .Select(ec => new ExamDto
                {
                    Id = ec.Exam.Id,
                    Name = ec.Exam.Name,
                    Status = ec.Exam.Status,
                    MaxMark = ec.Exam.MaxMark,
                    Date = ec.Exam.Date,
                    Time = ec.Exam.Time,
                    CourseId = ec.Course.Id,
                    TeacherId = ec.Exam.TeacherId,
                    CourseName = ec.Course.Name
                })
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
            Grade = sc.StudentCourse.StudentMark,
            StudentId = sc.Student.Id,
            courseId = sc.Course.Id
            })
            .ToListAsync();
            
            return grades;
        }
        public async Task<IEnumerable<Course>> GetCoursesByTeacherIdAsync(int teacherId)
        {
            return await _context.Courses
                .Where(c => c.TeacherId == teacherId)
                .ToListAsync();
        }
    public async Task<int> GetTeacherIdFromUsername(string username)
    {
        var teacher = await _context.Teachers
            .Join(_context.Users, t => t.UserId, u => u.Id, (t, u) => new { Teacher = t, User = u })
            .Where(tu => tu.User.UserName == username)
            .Select(tu => tu.Teacher.Id)
            .SingleOrDefaultAsync();
        
        return teacher;
    }
    }
}
