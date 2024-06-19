using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IExamService
    {
        Task<IEnumerable<Exam>> GetAllExamsAsync();
        Task<Exam> GetExamByIdAsync(int id);
        Task<Exam> AddExamAsync(Exam exam);
        Task<Exam> UpdateExamAsync(Exam exam);
        Task DeleteExamAsync(int id);
    }
}
