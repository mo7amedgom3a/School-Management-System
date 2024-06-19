using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class HomeworkService : IHomeworkService
    {
        private readonly IHomeworkRepository _homeworkRepository;

        public HomeworkService(IHomeworkRepository homeworkRepository)
        {
            _homeworkRepository = homeworkRepository;
        }

        public async Task<IEnumerable<Homework>> GetAllHomeworksAsync()
        {
            return await _homeworkRepository.GetAllAsync();
        }

        public async Task<Homework> GetHomeworkByIdAsync(int id)
        {
            return await _homeworkRepository.GetByIdAsync(id);
        }

        public async Task<Homework> AddHomeworkAsync(Homework homework)
        {
            return await _homeworkRepository.AddAsync(homework);
        }

        public async Task<Homework> UpdateHomeworkAsync(Homework homework)
        {
            return await _homeworkRepository.UpdateAsync(homework);
        }

        public async Task DeleteHomeworkAsync(int id)
        {
            await _homeworkRepository.DeleteAsync(id);
        }
    }
}
