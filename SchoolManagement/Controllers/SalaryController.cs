using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class SalaryController : ControllerBase
    {
        private readonly ISalaryService _salaryService;
        private readonly IMapper _mapper;

        public SalaryController(ISalaryService salaryService, IMapper mapper)
        {
            _salaryService = salaryService;
            _mapper = mapper;
        }

        // GET: api/salary
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalaryDto>>> GetAllSalaries()
        {
            var salaries = await _salaryService.GetAllSalariesAsync();
            var salaryDtos = _mapper.Map<IEnumerable<SalaryDto>>(salaries);
            return Ok(salaryDtos);
        }

        // GET: api/salary/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<SalaryDto>> GetSalaryById(int id)
        {
            var salary = await _salaryService.GetSalaryByIdAsync(id);
            if (salary == null)
                return NotFound();

            var salaryDto = _mapper.Map<SalaryDto>(salary);
            return Ok(salaryDto);
        }

        // POST: api/salary
        [HttpPost]
        public async Task<ActionResult<SalaryDto>> AddSalary(SalaryCreateUpdateDto salaryCreateUpdateDto)
        {
            var salary = _mapper.Map<Salary>(salaryCreateUpdateDto);
            var createdSalary = await _salaryService.AddSalaryAsync(salary);
            var createdSalaryDto = _mapper.Map<SalaryDto>(createdSalary);
            return CreatedAtAction(nameof(GetSalaryById), new { id = createdSalary.Id }, createdSalaryDto);
        }

        // PUT: api/salary/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<SalaryDto>> UpdateSalary(int id, SalaryCreateUpdateDto salaryCreateUpdateDto)
        {
            if (id != salaryCreateUpdateDto.TeacherId)
                return BadRequest();

            var salaryToUpdate = _mapper.Map<Salary>(salaryCreateUpdateDto);
            salaryToUpdate.Id = id;
            var updatedSalary = await _salaryService.UpdateSalaryAsync(salaryToUpdate);
            if (updatedSalary == null)
                return NotFound();

            var updatedSalaryDto = _mapper.Map<SalaryDto>(updatedSalary);
            return Ok(updatedSalaryDto);
        }

        // DELETE: api/salary/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalary(int id)
        {
            await _salaryService.DeleteSalaryAsync(id);
            return NoContent();
        }
    }
}
