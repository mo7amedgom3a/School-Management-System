using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task<Course> GetCourseByIdAsync(int id);
        Task<Course> AddCourseAsync(Course course);
        Task<Course> UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(int id);
    }
}
