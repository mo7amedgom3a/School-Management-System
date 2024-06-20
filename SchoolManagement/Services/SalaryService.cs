using SchoolManagement.Models;
using SchoolManagement.Repositories.Interfaces;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class SalaryService : ISalaryService
    {
        private readonly ISalaryRepository _salaryRepository;

        public SalaryService(ISalaryRepository salaryRepository)
        {
            _salaryRepository = salaryRepository;
        }

        public async Task<IEnumerable<Salary>> GetAllSalariesAsync()
        {
            return await _salaryRepository.GetAllAsync();
        }

        public async Task<Salary> GetSalaryByIdAsync(int id)
        {
            return await _salaryRepository.GetByIdAsync(id);
        }

        public async Task<Salary> AddSalaryAsync(Salary salary)
        {
            return await _salaryRepository.AddAsync(salary);
        }

        public async Task<Salary> UpdateSalaryAsync(Salary salary)
        {
            return await _salaryRepository.UpdateAsync(salary);
        }

        public async Task DeleteSalaryAsync(int id)
        {
            await _salaryRepository.DeleteAsync(id);
        }
    }
}
