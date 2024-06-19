using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IStudentsHomeworkService
    {
        Task<IEnumerable<StudentHomework>> GetAllStudentsHomeworkAsync();
        Task<StudentHomework> GetStudentsHomeworkByIdAsync(int studentId, int homeworkId);
        Task<StudentHomework> AddStudentsHomeworkAsync(StudentHomework studentsHomework);
        Task<StudentHomework> UpdateStudentsHomeworkAsync(StudentHomework studentsHomework);
        Task DeleteStudentsHomeworkAsync(int studentId, int homeworkId);
    }
}
