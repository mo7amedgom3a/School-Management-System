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
    [Authorize(Roles = "Teacher")]
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : ControllerBase
    {
        private readonly IAttendanceService _attendanceService;
        private readonly IMapper _mapper;

        public AttendanceController(IAttendanceService attendanceService, IMapper mapper)
        {
            _attendanceService = attendanceService;
            _mapper = mapper;
        }

        // GET: api/attendance
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttendanceDto>>> GetAllAttendances()
        {
            var attendances = await _attendanceService.GetAllAttendancesAsync();
            var attendanceDtos = _mapper.Map<IEnumerable<AttendanceDto>>(attendances);
            return Ok(attendanceDtos);
        }

        // GET: api/attendance/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<AttendanceDto>> GetAttendanceById(int id)
        {
            var attendance = await _attendanceService.GetAttendanceByIdAsync(id);
            if (attendance == null)
                return NotFound();

            var attendanceDto = _mapper.Map<AttendanceDto>(attendance);
            return Ok(attendanceDto);
        }

        // POST: api/attendance
        [HttpPost]
        public async Task<ActionResult<AttendanceDto>> AddAttendance(AttendanceCreateUpdateDto attendanceDto)
        {
            var attendance = _mapper.Map<Attendance>(attendanceDto);
            var createdAttendance = await _attendanceService.AddAttendanceAsync(attendance);
            var createdAttendanceDto = _mapper.Map<AttendanceDto>(createdAttendance);
            return CreatedAtAction(nameof(GetAttendanceById), new { id = createdAttendance.Id }, createdAttendanceDto);
        }

        // PUT: api/attendance/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<AttendanceDto>> UpdateAttendance(int id, AttendanceCreateUpdateDto attendanceDto)
        {
            var attendance = _mapper.Map<Attendance>(attendanceDto);
            attendance.Id = id;

            var updatedAttendance = await _attendanceService.UpdateAttendanceAsync(attendance);
            if (updatedAttendance == null)
                return NotFound();

            var updatedAttendanceDto = _mapper.Map<AttendanceDto>(updatedAttendance);
            return Ok(updatedAttendanceDto);
        }

        // DELETE: api/attendance/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttendance(int id)
        {
            await _attendanceService.DeleteAttendanceAsync(id);
            return NoContent();
        }
    }
}
