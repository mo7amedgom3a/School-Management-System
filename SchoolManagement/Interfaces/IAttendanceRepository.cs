using SchoolManagement.Dtos;
using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IAttendanceRepository
    {
        Task<IEnumerable<AttendanceDto>> GetAllAsync();
        Task<AttendanceDto> GetByIdAsync(int id);
        Task<Attendance> AddAsync(Attendance attendance);
        Task<Attendance> UpdateAsync(Attendance attendance);
        Task DeleteAsync(int id);
    }
}
