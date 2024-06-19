using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class AttendanceService : IAttendanceService
    {
        private readonly IAttendanceRepository _attendanceRepository;

        public AttendanceService(IAttendanceRepository attendanceRepository)
        {
            _attendanceRepository = attendanceRepository;
        }

        public async Task<IEnumerable<Attendance>> GetAllAttendancesAsync()
        {
            return await _attendanceRepository.GetAllAsync();
        }

        public async Task<Attendance> GetAttendanceByIdAsync(int id)
        {
            return await _attendanceRepository.GetByIdAsync(id);
        }

        public async Task<Attendance> AddAttendanceAsync(Attendance attendance)
        {
            return await _attendanceRepository.AddAsync(attendance);
        }

        public async Task<Attendance> UpdateAttendanceAsync(Attendance attendance)
        {
            return await _attendanceRepository.UpdateAsync(attendance);
        }

        public async Task DeleteAttendanceAsync(int id)
        {
            await _attendanceRepository.DeleteAsync(id);
        }
    }
}
