using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IAttendanceService
    {
        Task<IEnumerable<Attendance>> GetAllAttendancesAsync();
        Task<Attendance> GetAttendanceByIdAsync(int id);
        Task<Attendance> AddAttendanceAsync(Attendance attendance);
        Task<Attendance> UpdateAttendanceAsync(Attendance attendance);
        Task DeleteAttendanceAsync(int id);
    }
}
