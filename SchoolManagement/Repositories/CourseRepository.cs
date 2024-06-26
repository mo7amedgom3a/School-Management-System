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
    public class CourseRepository : ICourseRepository
    {
        private readonly SchoolContext _context;
        private readonly IMapper _mapper;

        public CourseRepository(SchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

         public async Task<IEnumerable<CourseDto>> GetAllAsync()
        {
            return await _context.Courses
                .Include(c => c.Department)
                .Include(c => c.Teacher)
                .ProjectTo<CourseDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<CourseDto> GetByIdAsync(int id)
        {
            return await _context.Courses
                .Include(c => c.Department)
                .Where(c => c.Id == id)
                .ProjectTo<CourseDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();
        }

        public async Task<Course> AddAsync(Course course)
        {
 
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();
            return course;
        }

        public async Task<Course> UpdateAsync(Course course)
        {
            _context.Courses.Update(course);
            await _context.SaveChangesAsync();
            return course;
        }

        public async Task DeleteAsync(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course != null)
            {
                _context.Courses.Remove(course);
                await _context.SaveChangesAsync();
            }
        }
    }
}
