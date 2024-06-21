using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using SchoolManagement.Dtos;

namespace SchoolManagement.Services.Interfaces
{
    public interface ICourseService
    {
        Task<IEnumerable<CourseDto>> GetAllCoursesAsync();
        Task<CourseDto> GetCourseByIdAsync(int id);
        Task<Course> AddCourseAsync(Course course);
        Task<Course> UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(int id);
    }
}
