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
        Task<bool> DeleteTeacherAsync(int id);
        Task<IEnumerable<StudentsDto>> GetStudentsByTeacherIdAsync(int teacherId);
        Task<IEnumerable<HomeworksDto>> GetHomeworksByTeacherIdAsync(int teacherId);
        Task<IEnumerable<ExamDto>> GetExamsByTeacherIdAsync(int teacherId);
        Task<IEnumerable<StudentGradeDto>> GetGradesByTeacherIdAsync(int teacherId);
        Task<IEnumerable<Course>> GetCoursesByTeacherIdAsync(int teacherId);
        Task<int> GetTeacherIdFromUsername(string username);
    }
}
