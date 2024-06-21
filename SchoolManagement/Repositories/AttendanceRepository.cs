using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using AutoMapper;

namespace SchoolManagement.Repositories
{
    public class AttendanceRepository : IAttendanceRepository
    {
        private readonly SchoolContext _context;
         private readonly IMapper _mapper;

        public AttendanceRepository(SchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<AttendanceDto>> GetAllAsync()
        {
            return await _context.Attendances
                .Include(a => a.Student)
                .Include(a => a.Course)
                .ProjectTo<AttendanceDto>(_mapper.ConfigurationProvider) // AutoMapper projection
                .ToListAsync();
        }

        public async Task<AttendanceDto> GetByIdAsync(int id)
        {
            return await _context.Attendances
                .Include(a => a.Student)
                .Include(a => a.Course)
                .Where(a => a.Id == id)
                .ProjectTo<AttendanceDto>(_mapper.ConfigurationProvider) // AutoMapper projection
                .FirstOrDefaultAsync();
        }


        public async Task<Attendance> AddAsync(Attendance attendance)
        {
            _context.Attendances.Add(attendance);
            await _context.SaveChangesAsync();
            return attendance;
        }

        public async Task<Attendance> UpdateAsync(Attendance attendance)
        {
            _context.Attendances.Update(attendance);
            await _context.SaveChangesAsync();
            return attendance;
        }

        public async Task DeleteAsync(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance != null)
            {
                _context.Attendances.Remove(attendance);
                await _context.SaveChangesAsync();
            }
        }
    }
}
