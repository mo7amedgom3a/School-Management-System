using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IHomeworkRepository
    {
        Task<IEnumerable<Homework>> GetAllAsync();
        Task<Homework> GetByIdAsync(int id);
        Task<Homework> AddAsync(Homework homework);
        Task<Homework> UpdateAsync(Homework homework);
        Task DeleteAsync(int id);
    }
}
