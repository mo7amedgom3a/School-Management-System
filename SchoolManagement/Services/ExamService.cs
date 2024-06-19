using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class ExamService : IExamService
    {
        private readonly IExamRepository _examRepository;

        public ExamService(IExamRepository examRepository)
        {
            _examRepository = examRepository;
        }

        public async Task<IEnumerable<Exam>> GetAllExamsAsync()
        {
            return await _examRepository.GetAllAsync();
        }

        public async Task<Exam> GetExamByIdAsync(int id)
        {
            return await _examRepository.GetByIdAsync(id);
        }

        public async Task<Exam> AddExamAsync(Exam exam)
        {
            return await _examRepository.AddAsync(exam);
        }

        public async Task<Exam> UpdateExamAsync(Exam exam)
        {
            return await _examRepository.UpdateAsync(exam);
        }

        public async Task DeleteExamAsync(int id)
        {
            await _examRepository.DeleteAsync(id);
        }
    }
}
