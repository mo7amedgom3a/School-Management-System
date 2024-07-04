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
    [Authorize(Roles = "Student")]
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsHomeworkController : ControllerBase
    {
        private readonly IStudentsHomeworkService _studentsHomeworkService;
        private readonly IMapper _mapper;

        public StudentsHomeworkController(IStudentsHomeworkService studentsHomeworkService, IMapper mapper)
        {
            _studentsHomeworkService = studentsHomeworkService;
            _mapper = mapper;
        }

        // GET: api/studentshomework
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentsHomeworkDto>>> GetAllStudentsHomework()
        {
            var studentsHomework = await _studentsHomeworkService.GetAllStudentsHomeworkAsync();
            var studentsHomeworkDtos = _mapper.Map<IEnumerable<StudentsHomeworkDto>>(studentsHomework);
            return Ok(studentsHomeworkDtos);
        }

        // GET: api/studentshomework/{studentId}/{homeworkId}
        [HttpGet("{studentId}/{homeworkId}")]
        public async Task<ActionResult<StudentsHomeworkDto>> GetStudentsHomeworkById(int studentId, int homeworkId)
        {
            var studentsHomework = await _studentsHomeworkService.GetStudentsHomeworkByIdAsync(studentId, homeworkId);
            if (studentsHomework == null)
                return NotFound();

            var studentsHomeworkDto = _mapper.Map<StudentsHomeworkDto>(studentsHomework);
            return Ok(studentsHomeworkDto);
        }

       // POST: api/studentshomework
        [HttpPost]
        public async Task<ActionResult<StudentsHomeworkDto>> AddStudentsHomework([FromForm] StudentsHomeworkCreateUpdateDto studentsHomeworkDto, [FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // Generate a unique filename and save the file to the server
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var uploadsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Uploads");
            var filePath = Path.Combine(uploadsPath, fileName);
            if (!Directory.Exists(uploadsPath))
            {
                Directory.CreateDirectory(uploadsPath);
            }

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Map the DTO to the entity
            var studentsHomework = _mapper.Map<StudentHomework>(studentsHomeworkDto);
            

            // Store the file path
            studentsHomework.FileUrl = $"/Uploads/{fileName}";
            studentsHomework.SubmitDate = DateTime.Now;

            // Save the homework details in the database
            var createdStudentsHomework = await _studentsHomeworkService.AddStudentsHomeworkAsync(studentsHomework);

            // Map the created entity to the DTO
            var createdStudentsHomeworkDto = _mapper.Map<StudentsHomeworkDto>(createdStudentsHomework);

            return CreatedAtAction(nameof(GetStudentsHomeworkById), new { studentId = createdStudentsHomework.StudentId, homeworkId = createdStudentsHomework.HomeworkId }, createdStudentsHomeworkDto);
        }


        // PUT: api/studentshomework/{studentId}/{homeworkId}
        [HttpPut("{studentId}/{homeworkId}")]
        public async Task<ActionResult<StudentsHomeworkDto>> UpdateStudentsHomework(int studentId, int homeworkId, StudentsHomeworkCreateUpdateDto studentsHomeworkDto)
        {
            if (studentId != studentsHomeworkDto.StudentId || homeworkId != studentsHomeworkDto.HomeworkId)
                return BadRequest();

            var studentsHomeworkToUpdate = _mapper.Map<StudentHomework>(studentsHomeworkDto);
            var updatedStudentsHomework = await _studentsHomeworkService.UpdateStudentsHomeworkAsync(studentsHomeworkToUpdate);
            if (updatedStudentsHomework == null)
                return NotFound();

            var updatedStudentsHomeworkDto = _mapper.Map<StudentsHomeworkDto>(updatedStudentsHomework);
            return Ok(updatedStudentsHomeworkDto);
        }

        // DELETE: api/studentshomework/{studentId}/{homeworkId}
        [HttpDelete("{studentId}/{homeworkId}")]
        public async Task<IActionResult> DeleteStudentsHomework(int studentId, int homeworkId)
        {
            await _studentsHomeworkService.DeleteStudentsHomeworkAsync(studentId, homeworkId);
            return NoContent();
        }
    }
}
