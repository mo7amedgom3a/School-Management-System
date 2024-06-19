using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class AttendanceRepository : IAttendanceRepository
    {
        private readonly SchoolContext _context;

        public AttendanceRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Attendance>> GetAllAsync()
        {
            return await _context.Attendances
                .Include(a => a.Student)
                .Include(a => a.Course)
                .ToListAsync();
        }

        public async Task<Attendance> GetByIdAsync(int id)
        {
            return await _context.Attendances
                .Include(a => a.Student)
                .Include(a => a.Course)
                .FirstOrDefaultAsync(a => a.Id == id);
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
