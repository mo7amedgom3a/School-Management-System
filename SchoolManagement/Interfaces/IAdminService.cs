using SchoolManagement.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IAdminService
    {
        Task<AdminStatisticsDto> GetOverallStatisticsAsync();
        Task<IEnumerable<TeacherStatisticsDto>> GetTeacherStatisticsAsync();
        Task<IEnumerable<StudentStatisticsDto>> GetStudentStatisticsAsync();
    }
}
