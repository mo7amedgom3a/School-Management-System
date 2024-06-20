using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface ISalaryRepository
    {
        Task<IEnumerable<Salary>> GetAllAsync();
        Task<Salary> GetByIdAsync(int id);
        Task<Salary> AddAsync(Salary salary);
        Task<Salary> UpdateAsync(Salary salary);
        Task DeleteAsync(int id);
    }
}
