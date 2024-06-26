using SchoolManagement.Dtos;
using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface ITeacherService
    {
        Task<IEnumerable<Teacher>> GetAllTeachersAsync();
        Task<Teacher> GetTeacherByIdAsync(int id);
        Task<Teacher> AddTeacherAsync(Teacher teacher);
        Task<Teacher> UpdateTeacherAsync(Teacher teacher);
        Task DeleteTeacherAsync(int id);
        Task<IEnumerable<StudentsDto>> GetStudentsByTeacherIdAsync(int teacherId);
        Task<IEnumerable<HomeworksDto>> GetHomeworksByTeacherIdAsync(int teacherId);
        Task<IEnumerable<Exam>> GetExamsByTeacherIdAsync(int teacherId);
        Task<IEnumerable<StudentGradeDto>> GetGradesByTeacherIdAsync(int teacherId);
    }
}
