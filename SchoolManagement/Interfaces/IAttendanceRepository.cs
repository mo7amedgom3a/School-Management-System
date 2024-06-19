using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IAttendanceRepository
    {
        Task<IEnumerable<Attendance>> GetAllAsync();
        Task<Attendance> GetByIdAsync(int id);
        Task<Attendance> AddAsync(Attendance attendance);
        Task<Attendance> UpdateAsync(Attendance attendance);
        Task DeleteAsync(int id);
    }
}
