using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _courseRepository;

        public CourseService(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return await _courseRepository.GetAllAsync();
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _courseRepository.GetByIdAsync(id);
        }

        public async Task<Course> AddCourseAsync(Course course)
        {
            return await _courseRepository.AddAsync(course);
        }

        public async Task<Course> UpdateCourseAsync(Course course)
        {
            return await _courseRepository.UpdateAsync(course);
        }

        public async Task DeleteCourseAsync(int id)
        {
            await _courseRepository.DeleteAsync(id);
        }
    }
}
