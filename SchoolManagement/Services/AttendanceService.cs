using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
namespace SchoolManagement.Services
{
    public class AttendanceService : IAttendanceService
    {
        private readonly IAttendanceRepository _attendanceRepository;
        private readonly IMapper _mapper;

        public AttendanceService(IAttendanceRepository attendanceRepository, IMapper mapper)
        {
            _attendanceRepository = attendanceRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AttendanceDto>> GetAllAttendancesAsync()
        {
            return await _attendanceRepository.GetAllAsync();
        }

        public async Task<AttendanceDto> GetAttendanceByIdAsync(int id)
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