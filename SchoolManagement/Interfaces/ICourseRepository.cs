using SchoolManagement.Dtos;
using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface ICourseRepository
    {
        Task<IEnumerable<CourseDto>> GetAllAsync();
        Task<CourseDto> GetByIdAsync(int id);
        Task<Course> AddAsync(Course course);
        Task<Course> UpdateAsync(Course course);
        Task DeleteAsync(int id);
        
    }
}
