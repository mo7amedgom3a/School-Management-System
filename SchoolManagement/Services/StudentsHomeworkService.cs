using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class StudentsHomeworkService : IStudentsHomeworkService
    {
        private readonly IStudentsHomeworkRepository _studentsHomeworkRepository;

        public StudentsHomeworkService(IStudentsHomeworkRepository studentsHomeworkRepository)
        {
            _studentsHomeworkRepository = studentsHomeworkRepository;
        }

        public async Task<IEnumerable<StudentHomework>> GetAllStudentsHomeworkAsync()
        {
            return await _studentsHomeworkRepository.GetAllAsync();
        }

        public async Task<StudentHomework> GetStudentsHomeworkByIdAsync(int studentId, int homeworkId)
        {
            return await _studentsHomeworkRepository.GetByIdAsync(studentId, homeworkId);
        }

        public async Task<StudentHomework> AddStudentsHomeworkAsync(StudentHomework studentsHomework)
        {
            return await _studentsHomeworkRepository.AddAsync(studentsHomework);
        }

        public async Task<StudentHomework> UpdateStudentsHomeworkAsync(StudentHomework studentsHomework)
        {
            return await _studentsHomeworkRepository.UpdateAsync(studentsHomework);
        }

        public async Task DeleteStudentsHomeworkAsync(int studentId, int homeworkId)
        {
            await _studentsHomeworkRepository.DeleteAsync(studentId, homeworkId);
        }
    }
}
