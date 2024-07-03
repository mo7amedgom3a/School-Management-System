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
    [Authorize(Roles = "Teacher, Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class ExamController : ControllerBase
    {
        private readonly IExamService _examService;
        private readonly IMapper _mapper;

        public ExamController(IExamService examService, IMapper mapper)
        {
            _examService = examService;
            _mapper = mapper;
        }

        // GET: api/exam
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExamDto>>> GetAllExams()
        {
            var exams = await _examService.GetAllExamsAsync();
            var examDtos = _mapper.Map<IEnumerable<ExamDto>>(exams);
            return Ok(examDtos);
        }

        // GET: api/exam/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ExamDto>> GetExamById(int id)
        {
            var exam = await _examService.GetExamByIdAsync(id);
            if (exam == null)
                return NotFound();

            var examDto = _mapper.Map<ExamDto>(exam);
            return Ok(examDto);
        }

        // POST: api/exam
        [HttpPost]
        public async Task<ActionResult<ExamDto>> AddExam(ExamCreateUpdateDto examDto)
        {
            var exam = _mapper.Map<Exam>(examDto);
            var createdExam = await _examService.AddExamAsync(exam);
            var createdExamDto = _mapper.Map<ExamDto>(createdExam);
            return CreatedAtAction(nameof(GetExamById), new { id = createdExam.Id }, createdExamDto);
        }

        // PUT: api/exam/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<ExamDto>> UpdateExam(int id, ExamCreateUpdateDto examDto)
        {
            var exam = _mapper.Map<Exam>(examDto);
            exam.Id = id;

            var updatedExam = await _examService.UpdateExamAsync(exam);
            if (updatedExam == null)
                return NotFound();

            var updatedExamDto = _mapper.Map<ExamDto>(updatedExam);
            return Ok(updatedExamDto);
        }

        // DELETE: api/exam/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExam(int id)
        {
            await _examService.DeleteExamAsync(id);
            return NoContent();
        }
    }
}
