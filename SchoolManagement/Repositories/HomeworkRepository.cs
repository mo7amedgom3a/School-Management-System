using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class HomeworkRepository : IHomeworkRepository
    {
        private readonly SchoolContext _context;

        public HomeworkRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Homework>> GetAllAsync()
        {
            return await _context.Homeworks.ToListAsync();
        }

        public async Task<Homework> GetByIdAsync(int id)
        {
            return await _context.Homeworks.FindAsync(id);
        }

        public async Task<Homework> AddAsync(Homework homework)
        {
            _context.Homeworks.Add(homework);
            await _context.SaveChangesAsync();
            return homework;
        }

        public async Task<Homework> UpdateAsync(Homework homework)
        {
            _context.Homeworks.Update(homework);
            await _context.SaveChangesAsync();
            return homework;
        }

        public async Task DeleteAsync(int id)
        {
            var homework = await _context.Homeworks.FindAsync(id);
            if (homework != null)
            {
                _context.Homeworks.Remove(homework);
                await _context.SaveChangesAsync();
            }
        }
    }
}
