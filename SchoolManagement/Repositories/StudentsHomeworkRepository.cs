using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories
{
    public class StudentsHomeworkRepository : IStudentsHomeworkRepository
    {
        private readonly SchoolContext _context;

        public StudentsHomeworkRepository(SchoolContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<StudentHomework>> GetAllAsync()
        {
            return await _context.StudentHomeworks
                .Include(sh => sh.Student)
                .Include(sh => sh.Homework)
                .ToListAsync();
        }

        public async Task<StudentHomework> GetByIdAsync(int studentId, int homeworkId)
        {
            return await _context.StudentHomeworks
                .Include(sh => sh.Student)
                .Include(sh => sh.Homework)
                .FirstOrDefaultAsync(sh => sh.StudentId == studentId && sh.HomeworkId == homeworkId);
        }

        public async Task<StudentHomework> AddAsync(StudentHomework studentsHomework)
        {
            _context.StudentHomeworks.Add(studentsHomework);
            await _context.SaveChangesAsync();
            return studentsHomework;
        }

        public async Task<StudentHomework> UpdateAsync(StudentHomework studentsHomework)
        {
            _context.StudentHomeworks.Update(studentsHomework);
            await _context.SaveChangesAsync();
            return studentsHomework;
        }

        public async Task DeleteAsync(int studentId, int homeworkId)
        {
            var studentsHomework = await _context.StudentHomeworks.FindAsync(studentId, homeworkId);
            if (studentsHomework != null)
            {
                _context.StudentHomeworks.Remove(studentsHomework);
                await _context.SaveChangesAsync();
            }
        }
    }
}
