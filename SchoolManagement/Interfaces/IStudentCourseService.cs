using SchoolManagement.Dtos;
using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IStudentCourseService
    {
        Task<IEnumerable<StudentCourseDto>> GetAllStudentCoursesAsync();
        Task<StudentCourseDto> GetStudentCourseByIdAsync(int studentId, int courseId);
        Task<StudentCourseCreateUpdateDto> AddStudentCourseAsync(StudentCourseCreateUpdateDto studentCourse);
        Task<StudentCourse> UpdateStudentCourseAsync(StudentCourse studentCourse);
        Task DeleteStudentCourseAsync(int studentId, int courseId);
        Task<IEnumerable<StudentCourseDto>> GetStudentsByCourseId(int courseId);
    }
}
