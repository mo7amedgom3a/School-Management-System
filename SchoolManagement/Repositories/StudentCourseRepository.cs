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

        public async Task<StudentCourseCreateUpdateDto> AddAsync(StudentCourseCreateUpdateDto studentCourse)
        {
            var newStudentCourse = _mapper.Map<StudentCourse>(studentCourse);
            newStudentCourse.FullMark = 100;
            await _context.StudentCourses.AddAsync(newStudentCourse);
            await _context.SaveChangesAsync();
            return _mapper.Map<StudentCourseCreateUpdateDto>(newStudentCourse);
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
        public async Task<IEnumerable<StudentCourseDto>> GetStudentsByCourse(int courseId)
        {
            return await _context.Courses
                .Include(c => c.StudentCourses)
                .ThenInclude(sc => sc.Student)
                .Where(c => c.Id == courseId)
                .SelectMany(c => c.StudentCourses)
                .ProjectTo<StudentCourseDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}
