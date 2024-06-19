using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class StudentCourseRepository : IStudentCourseRepository
    {
        private readonly SchoolContext _context;

        public StudentCourseRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<StudentCourse>> GetAllAsync()
        {
            return await _context.StudentCourses
                .Include(sc => sc.Student)
                .Include(sc => sc.Course)
                .ToListAsync();
        }

        public async Task<StudentCourse> GetByIdAsync(int studentId, int courseId)
        {
            return await _context.StudentCourses
                .Include(sc => sc.Student)
                .Include(sc => sc.Course)
                .FirstOrDefaultAsync(sc => sc.StudentId == studentId && sc.CourseId == courseId);
        }

        public async Task<StudentCourse> AddAsync(StudentCourse studentCourse)
        {
            _context.StudentCourses.Add(studentCourse);
            await _context.SaveChangesAsync();
            return studentCourse;
        }

        public async Task<StudentCourse> UpdateAsync(StudentCourse studentCourse)
        {
            _context.StudentCourses.Update(studentCourse);
            await _context.SaveChangesAsync();
            return studentCourse;
        }

        public async Task DeleteAsync(int studentId, int courseId)
        {
            var studentCourse = await _context.StudentCourses.FindAsync(studentId, courseId);
            if (studentCourse != null)
            {
                _context.StudentCourses.Remove(studentCourse);
                await _context.SaveChangesAsync();
            }
        }
    }
}
