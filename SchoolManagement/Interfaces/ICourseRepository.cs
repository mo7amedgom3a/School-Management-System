using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetAllAsync();
        Task<Course> GetByIdAsync(int id);
        Task<Course> AddAsync(Course course);
        Task<Course> UpdateAsync(Course course);
        Task DeleteAsync(int id);
    }
}
