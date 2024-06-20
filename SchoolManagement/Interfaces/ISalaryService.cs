using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface ISalaryService
    {
        Task<IEnumerable<Salary>> GetAllSalariesAsync();
        Task<Salary> GetSalaryByIdAsync(int id);
        Task<Salary> AddSalaryAsync(Salary salary);
        Task<Salary> UpdateSalaryAsync(Salary salary);
        Task DeleteSalaryAsync(int id);
    }
}
