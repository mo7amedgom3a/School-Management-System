using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using SchoolManagement.Dtos;
namespace SchoolManagement.Services.Interfaces
{
    public interface IAttendanceService
    {
        Task<IEnumerable<AttendanceDto>> GetAllAttendancesAsync();
        Task<AttendanceDto> GetAttendanceByIdAsync(int id);
        Task<Attendance> AddAttendanceAsync(Attendance attendance);
        Task<Attendance> UpdateAttendanceAsync(Attendance attendance);
        Task DeleteAttendanceAsync(int id);
    }
}
