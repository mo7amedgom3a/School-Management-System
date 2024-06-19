using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class StudentCourseService : IStudentCourseService
    {
        private readonly IStudentCourseRepository _studentCourseRepository;

        public StudentCourseService(IStudentCourseRepository studentCourseRepository)
        {
            _studentCourseRepository = studentCourseRepository;
        }

        public async Task<IEnumerable<StudentCourse>> GetAllStudentCoursesAsync()
        {
            return await _studentCourseRepository.GetAllAsync();
        }

        public async Task<StudentCourse> GetStudentCourseByIdAsync(int studentId, int courseId)
        {
            return await _studentCourseRepository.GetByIdAsync(studentId, courseId);
        }

        public async Task<StudentCourse> AddStudentCourseAsync(StudentCourse studentCourse)
        {
            return await _studentCourseRepository.AddAsync(studentCourse);
        }

        public async Task<StudentCourse> UpdateStudentCourseAsync(StudentCourse studentCourse)
        {
            return await _studentCourseRepository.UpdateAsync(studentCourse);
        }

        public async Task DeleteStudentCourseAsync(int studentId, int courseId)
        {
            await _studentCourseRepository.DeleteAsync(studentId, courseId);
        }
    }
}
