using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        private readonly IMapper _mapper;

        public StudentController(IStudentService studentService, IMapper mapper)
        {
            _studentService = studentService;
            _mapper = mapper;
        }

        // GET: api/student
        [Authorize(Roles = "Admin, Teacher")]// add multiple roles {Roles = "Admin, Teacher"}
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDto>>> GetAllStudents()
        {
            var students = await _studentService.GetAllStudentsAsync();
            return Ok(students);
        }

        // GET: api/student/{id}
        [Authorize(Roles = "Student, Admin, Teacher")]
        
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDto>> GetStudentById(int id)
        {
            var student = await _studentService.GetStudentByIdAsync(id); 
            // Get the user ID from the JWT token
            var userId = "";
            foreach (Claim claim in User.Claims)
            {
                if (claim.Type == ClaimTypes.NameIdentifier)
                {
                    userId = claim.Value;
                }
            }
         
            //Check if the user ID matches the ID in the request
            if (userId != student.UserId)
            {
                return Unauthorized(); // Return 401 Unauthorized if the user ID does not match
            }
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        // POST: api/student
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<StudentDto>> CreateStudent([FromBody] StudentCreateUpdateDto studentDto)
        {
            var createdStudent = await _studentService.CreateStudentAsync(studentDto);
            return CreatedAtAction(nameof(GetStudentById), new { id = createdStudent.Id }, createdStudent);
        }

        // PUT: api/student/{id}
        [Authorize(Roles = "Student")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, [FromBody] StudentCreateUpdateDto studentDto)
        {
            var result = await _studentService.UpdateStudentAsync(id, studentDto);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }

        // DELETE: api/student/{id}
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var result = await _studentService.DeleteStudentAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return Ok();
        }
        [HttpGet("student/{username}")]
        public async Task<int> GetStudentIdFromUsername(string username)
        {
            return await _studentService.GetStudentIdFromUsername(username);
        }
    }

}
