using SchoolManagement.Dtos;
using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Repositories.Interfaces
{
    public interface IStudentCourseRepository
    {
        Task<IEnumerable<StudentCourseDto>> GetAllAsync();
        Task<StudentCourseDto> GetByIdAsync(int studentId, int courseId);
        Task<StudentCourse> AddAsync(StudentCourse studentCourse);
        Task<StudentCourse> UpdateAsync(StudentCourse studentCourse);
        Task DeleteAsync(int studentId, int courseId);
    }
}
