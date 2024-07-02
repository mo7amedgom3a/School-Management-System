using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using SchoolManagement.Dtos;

namespace SchoolManagement.Services
{
    public class StudentCourseService : IStudentCourseService
    {
        private readonly IStudentCourseRepository _studentCourseRepository;
        private readonly IMapper _mapper;

        public StudentCourseService(IStudentCourseRepository studentCourseRepository, IMapper mapper)
        {
            _studentCourseRepository = studentCourseRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<StudentCourseDto>> GetAllStudentCoursesAsync()
        {
            return await _studentCourseRepository.GetAllAsync();
        }

        public async Task<StudentCourseDto> GetStudentCourseByIdAsync(int studentId, int courseId)
        {
            return await _studentCourseRepository.GetByIdAsync(studentId, courseId);
        }

        public async Task<StudentCourseCreateUpdateDto> AddStudentCourseAsync(StudentCourseCreateUpdateDto studentCourse)
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
        public async Task<IEnumerable<StudentCourseDto>> GetStudentsByCourseId(int studentId)
        {
            return await _studentCourseRepository.GetStudentsByCourse(studentId);
        }
    }
}
