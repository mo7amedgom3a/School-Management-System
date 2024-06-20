using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Dtos;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class AdminService : IAdminService
    {
        private readonly SchoolContext _context;

        public AdminService(SchoolContext context)
        {
            _context = context;
        }

        public async Task<AdminStatisticsDto> GetOverallStatisticsAsync()
        {
            var totalStudents = await _context.Students.CountAsync();
            var totalTeachers = await _context.Teachers.CountAsync();
            var totalCourses = await _context.Courses.CountAsync();
            var totalDepartments = await _context.Departments.CountAsync();
            var totalSalaryPaid = await _context.Salaries.SumAsync(s => s.Amount);
            var averageSalary = await _context.Salaries.AverageAsync(s => s.Amount);
            var averageStudentMarks = await _context.StudentCourses.AverageAsync(sc => sc.StudentMark);
            var totalHomeworkAssignments = await _context.Homeworks.CountAsync();

            return new AdminStatisticsDto
            {
                TotalStudents = totalStudents,
                TotalTeachers = totalTeachers,
                TotalCourses = totalCourses,
                TotalDepartments = totalDepartments,
                TotalSalaryPaid = totalSalaryPaid,
                AverageSalary = averageSalary,
                AverageStudentMarks = averageStudentMarks,
                TotalHomeworkAssignments = totalHomeworkAssignments
            };
        }

        public async Task<IEnumerable<TeacherStatisticsDto>> GetTeacherStatisticsAsync()
        {
            return await _context.Teachers
                .Select(t => new TeacherStatisticsDto
                {
                    TeacherId = t.Id,
                    FullName = t.FirstName + " " + t.LastName,
                    Department = t.Department.Name,
                    TotalCourses = t.Courses.Count,
                    TotalSalary = t.Salaries.Sum(s => s.Amount),
                    TotalHomeworkAssigned = t.Homeworks.Count,
                    TotalExamsConducted = t.Exams.Count
                })
                .ToListAsync();
        }

        public async Task<IEnumerable<StudentStatisticsDto>> GetStudentStatisticsAsync()
        {
            return await _context.Students
                .Select(s => new StudentStatisticsDto
                {
                    StudentId = s.Id,
                    FullName = s.FirstName + " " + s.LastName,
                    Department = s.Department.Name,
                    AverageMarks = s.StudentCourses.Average(sc => sc.StudentMark),
                    TotalCoursesEnrolled = s.StudentCourses.Count,
                    TotalHomeworkSubmitted = s.StudentHomeworks.Count,
                    AttendanceCount = s.Attendances.Count(a => a.Status)
                })
                .ToListAsync();
        }
    }
}
