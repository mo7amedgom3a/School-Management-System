using SchoolManagement.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SchoolManagement.Services.Interfaces
{
    public interface IStudentService
    {
        Task<IEnumerable<StudentDto>> GetAllStudentsAsync();
        Task<StudentDto> GetStudentByIdAsync(int id);
        Task<StudentDto> CreateStudentAsync(StudentCreateUpdateDto studentDto);
        Task<bool> UpdateStudentAsync(int id, StudentCreateUpdateDto studentDto);
        Task<bool> DeleteStudentAsync(int id);
        Task<int> GetStudentIdFromUsername(string username);
    
        Task<double> GetTotalGradeForStudentAsync(int studentId);
        Task<int> GetNumberOfCoursesForStudentAsync(int studentId);
        Task<List<CourseGradeDto>> GetGradesForStudentInCoursesAsync(int studentId);

        Task<int> GetCompletedHomeworkCountForStudentAsync(int studentId);
        Task<int> GetPendingHomeworkCountForStudentAsync(int studentId);
        Task<List<string>> GetCourseNamesForStudentAsync(int studentId);
        Task<List<CourseTeacher>> GetCourseTeachersForStudentAsync(int studentId);
        Task<List<ExamDto>> GetCourseExamsForStudentAsync(int studentId);
        Task<int> GetClassAttendanceForStudentAsync(int studentId);
        Task<int> GetClassMissedForStudentAsync(int studentId);
        Task<List<StudentHomeWorkDto>> GetHomeworksForStudentAsync(int studentId);
    }
}
