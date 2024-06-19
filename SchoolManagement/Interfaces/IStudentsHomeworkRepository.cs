using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IStudentsHomeworkRepository
    {
        Task<IEnumerable<StudentHomework>> GetAllAsync();
        Task<StudentHomework> GetByIdAsync(int studentId, int homeworkId);
        Task<StudentHomework> AddAsync(StudentHomework studentsHomework);
        Task<StudentHomework> UpdateAsync(StudentHomework studentsHomework);
        Task DeleteAsync(int studentId, int homeworkId);
    }
}
