using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IHomeworkService
    {
        Task<IEnumerable<Homework>> GetAllHomeworksAsync();
        Task<Homework> GetHomeworkByIdAsync(int id);
        Task<Homework> AddHomeworkAsync(Homework homework);
        Task<Homework> UpdateHomeworkAsync(Homework homework);
        Task DeleteHomeworkAsync(int id);
    }
}
