using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IExamRepository
    {
        Task<IEnumerable<Exam>> GetAllAsync();
        Task<Exam> GetByIdAsync(int id);
        Task<Exam> AddAsync(Exam exam);
        Task<Exam> UpdateAsync(Exam exam);
        Task DeleteAsync(int id);
    }
}
