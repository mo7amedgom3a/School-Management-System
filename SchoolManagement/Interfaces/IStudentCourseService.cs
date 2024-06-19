using SchoolManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IStudentCourseService
    {
        Task<IEnumerable<StudentCourse>> GetAllStudentCoursesAsync();
        Task<StudentCourse> GetStudentCourseByIdAsync(int studentId, int courseId);
        Task<StudentCourse> AddStudentCourseAsync(StudentCourse studentCourse);
        Task<StudentCourse> UpdateStudentCourseAsync(StudentCourse studentCourse);
        Task DeleteStudentCourseAsync(int studentId, int courseId);
    }
}
