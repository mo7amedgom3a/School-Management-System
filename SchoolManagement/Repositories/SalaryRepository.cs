using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class SalaryRepository : ISalaryRepository
    {
        private readonly SchoolContext _context;

        public SalaryRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Salary>> GetAllAsync()
        {
            return await _context.Salaries
                .Include(s => s.Teacher)
                .ToListAsync();
        }

        public async Task<Salary> GetByIdAsync(int id)
        {
            return await _context.Salaries
                .Include(s => s.Teacher)
                .FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<Salary> AddAsync(Salary salary)
        {
            _context.Salaries.Add(salary);
            await _context.SaveChangesAsync();
            return salary;
        }

        public async Task<Salary> UpdateAsync(Salary salary)
        {
            _context.Salaries.Update(salary);
            await _context.SaveChangesAsync();
            return salary;
        }

        public async Task DeleteAsync(int id)
        {
            var salary = await _context.Salaries.FindAsync(id);
            if (salary != null)
            {
                _context.Salaries.Remove(salary);
                await _context.SaveChangesAsync();
            }
        }
    }
}
