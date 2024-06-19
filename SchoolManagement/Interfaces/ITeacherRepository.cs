using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface ITeacherRepository
    {
        Task<IEnumerable<Teacher>> GetAllAsync();
        Task<Teacher> GetByIdAsync(int id);
        Task<Teacher> AddAsync(Teacher teacher);
        Task<Teacher> UpdateAsync(Teacher teacher);
        Task DeleteAsync(int id);
    }
}
