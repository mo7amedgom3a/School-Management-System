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
    
    [ApiController]
    [Route("api/[controller]")]
    public class HomeworkController : ControllerBase
    {
        private readonly IHomeworkService _homeworkService;
        private readonly IMapper _mapper;

        public HomeworkController(IHomeworkService homeworkService, IMapper mapper)
        {
            _homeworkService = homeworkService;
            _mapper = mapper;
        }

        // GET: api/homework
        [Authorize(Roles = "Teacher, Student")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HomeworkDto>>> GetAllHomeworks()
        {
            var homeworks = await _homeworkService.GetAllHomeworksAsync();
            if (homeworks == null)
                return NotFound();
            var homeworkDtos = _mapper.Map<IEnumerable<HomeworkDto>>(homeworks);
            return Ok(homeworkDtos);
        }

        // GET: api/homework/{id}
        [Authorize(Roles = "Teacher, Student")]
        [HttpGet("{id}")]
        public async Task<ActionResult<HomeworkDto>> GetHomeworkById(int id)
        {
            var homework = await _homeworkService.GetHomeworkByIdAsync(id);
            if (homework == null)
                return NotFound();

            var homeworkDto = _mapper.Map<HomeworkDto>(homework);
            return Ok(homeworkDto);
        }

        // POST: api/homework
        [Authorize(Roles = "Teacher")]
        [HttpPost]
        public async Task<ActionResult<HomeworkDto>> AddHomework(HomeworkCreateUpdateDto homeworkDto)
        {
            var homework = _mapper.Map<Homework>(homeworkDto);
            var createdHomework = await _homeworkService.AddHomeworkAsync(homework);
            var createdHomeworkDto = _mapper.Map<HomeworkDto>(createdHomework);
            return CreatedAtAction(nameof(GetHomeworkById), new { id = createdHomework.Id }, createdHomeworkDto);
        }

        // PUT: api/homework/{id}
        [Authorize(Roles = "Teacher")]
        [HttpPut("{id}")]
        public async Task<ActionResult<HomeworkDto>> UpdateHomework(int id, HomeworkCreateUpdateDto homeworkDto)
        {
            var homework = _mapper.Map<Homework>(homeworkDto);
            homework.Id = id;

            var updatedHomework = await _homeworkService.UpdateHomeworkAsync(homework);
            if (updatedHomework == null)
                return NotFound();

            var updatedHomeworkDto = _mapper.Map<HomeworkDto>(updatedHomework);
            return Ok(updatedHomeworkDto);
        }

        // DELETE: api/homework/{id}
        [Authorize(Roles = "Teacher")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHomework(int id)
        {
            await _homeworkService.DeleteHomeworkAsync(id);
            return NoContent();
        }
    }
}
