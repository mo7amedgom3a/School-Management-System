using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolManagement.Dtos;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        // GET: api/admin/statistics
        [HttpGet("statistics")]
        public async Task<ActionResult<AdminStatisticsDto>> GetOverallStatistics()
        {
            
            var stats = await _adminService.GetOverallStatisticsAsync();
            return Ok(stats);
        }

        // GET: api/admin/teacher-statistics
        [HttpGet("teacher-statistics")]
        public async Task<ActionResult<IEnumerable<TeacherStatisticsDto>>> GetTeacherStatistics()
        {
            var stats = await _adminService.GetTeacherStatisticsAsync();
            return Ok(stats);
        }

        // GET: api/admin/student-statistics
        [HttpGet("student-statistics")]
        public async Task<ActionResult<IEnumerable<StudentStatisticsDto>>> GetStudentStatistics()
        {
            var stats = await _adminService.GetStudentStatisticsAsync();
            return Ok(stats);
        }
    }
}
