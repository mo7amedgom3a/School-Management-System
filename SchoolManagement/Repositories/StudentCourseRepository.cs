using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using SchoolManagement.Dtos;

namespace SchoolManagement.Repositories
{
    public class StudentCourseRepository : IStudentCourseRepository
    {
        private readonly SchoolContext _context;
        private readonly IMapper _mapper;

        public StudentCourseRepository(SchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<StudentCourseDto>> GetAllAsync()
        {
            return await _context.StudentCourses
                .Include(sc => sc.Student)
                .Include(sc => sc.Course)
                .ProjectTo<StudentCourseDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<StudentCourseDto> GetByIdAsync(int studentId, int courseId)
        {
            return await _context.StudentCourses
                .Include(sc => sc.Student)
                .Include(sc => sc.Course)
                .Where(sc => sc.StudentId == studentId && sc.CourseId == courseId)
                .ProjectTo<StudentCourseDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();
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
