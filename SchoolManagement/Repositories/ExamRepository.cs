using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class ExamRepository : IExamRepository
    {
        private readonly SchoolContext _context;

        public ExamRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Exam>> GetAllAsync()
        {
            return await _context.Exams.ToListAsync();
        }

        public async Task<Exam> GetByIdAsync(int id)
        {
            return await _context.Exams.FindAsync(id);
        }

        public async Task<Exam> AddAsync(Exam exam)
        {
            _context.Exams.Add(exam);
            await _context.SaveChangesAsync();
            return exam;
        }

        public async Task<Exam> UpdateAsync(Exam exam)
        {
            _context.Exams.Update(exam);
            await _context.SaveChangesAsync();
            return exam;
        }

        public async Task DeleteAsync(int id)
        {
            var exam = await _context.Exams.FindAsync(id);
            if (exam != null)
            {
                _context.Exams.Remove(exam);
                await _context.SaveChangesAsync();
            }
        }
    }
}
