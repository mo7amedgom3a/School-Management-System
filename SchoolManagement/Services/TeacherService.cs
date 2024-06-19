using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherService(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        public async Task<IEnumerable<Teacher>> GetAllTeachersAsync()
        {
            return await _teacherRepository.GetAllAsync();
        }

        public async Task<Teacher> GetTeacherByIdAsync(int id)
        {
            return await _teacherRepository.GetByIdAsync(id);
        }

        public async Task<Teacher> AddTeacherAsync(Teacher teacher)
        {
            return await _teacherRepository.AddAsync(teacher);
        }

        public async Task<Teacher> UpdateTeacherAsync(Teacher teacher)
        {
            return await _teacherRepository.UpdateAsync(teacher);
        }

        public async Task DeleteTeacherAsync(int id)
        {
            await _teacherRepository.DeleteAsync(id);
        }
    }
}
