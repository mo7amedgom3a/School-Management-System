using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SchoolManagement.Data;
using SchoolManagement.Dtos;
using SchoolManagement.Models;
using SchoolManagement.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagement.Services
{
    public class StudentService : IStudentService
    {
        private readonly SchoolContext _context;
        private readonly IMapper _mapper;

        public StudentService(SchoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<StudentDto>> GetAllStudentsAsync()
        {
            var students = await _context.Students.Include(s => s.Department).ToListAsync();
            var studentDtos = _mapper.Map<List<StudentDto>>(students);

            foreach (var studentDto in studentDtos)
            {
                studentDto.TotalGrade = await GetTotalGradeForStudentAsync(studentDto.Id);
                studentDto.NumberOfCourses = await GetNumberOfCoursesForStudentAsync(studentDto.Id);
                studentDto.CourseGrades = await GetGradesForStudentInCoursesAsync(studentDto.Id);
                studentDto.CompletedHomeworkCount = await GetCompletedHomeworkCountForStudentAsync(studentDto.Id);
                studentDto.PendingHomeworkCount = await GetPendingHomeworkCountForStudentAsync(studentDto.Id);
                studentDto.CourseNames = await GetCourseNamesForStudentAsync(studentDto.Id);
                studentDto.CourseTeachers = await GetCourseTeachersForStudentAsync(studentDto.Id);
                studentDto.CourseExams = await GetCourseExamsForStudentAsync(studentDto.Id);
            }

            return studentDtos;
        }

        
        public async Task<StudentDto> GetStudentByIdAsync(int id)
        {
            var student = await _context.Students.Include(s => s.Department).FirstOrDefaultAsync(s => s.Id == id);
            if (student == null)
            {
                return null;
            }
            var studentDto = _mapper.Map<StudentDto>(student);
            studentDto.TotalGrade = await GetTotalGradeForStudentAsync(studentDto.Id);
            studentDto.NumberOfCourses = await GetNumberOfCoursesForStudentAsync(studentDto.Id);
            studentDto.CourseGrades = await GetGradesForStudentInCoursesAsync(studentDto.Id);
            studentDto.CompletedHomeworkCount = await GetCompletedHomeworkCountForStudentAsync(studentDto.Id);
            studentDto.PendingHomeworkCount = await GetPendingHomeworkCountForStudentAsync(studentDto.Id);
            studentDto.CourseNames = await GetCourseNamesForStudentAsync(studentDto.Id);
            studentDto.CourseTeachers = await GetCourseTeachersForStudentAsync(studentDto.Id);
            var user = await GetUserById(studentDto.UserId);
            studentDto.UserName = user.UserName;
            studentDto.CourseExams = await GetCourseExamsForStudentAsync(studentDto.Id);
            studentDto.ClassAttendance = await GetClassAttendanceForStudentAsync(studentDto.Id);
            studentDto.ClassMissed = await GetClassMissedForStudentAsync(studentDto.Id);
            studentDto.Homeworks = await GetHomeworksForStudentAsync(studentDto.Id);


            return studentDto;
        }

        public async Task<StudentDto> CreateStudentAsync(StudentCreateUpdateDto studentDto)
        {
            var student = _mapper.Map<Student>(studentDto);
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return _mapper.Map<StudentDto>(student);
        }
        public async Task<IdentityUser> GetUserById(string userId)
        {
            return await _context.Users.FindAsync(userId);
        }




        public async Task<bool> UpdateStudentAsync(int id, StudentCreateUpdateDto studentDto)
        {
            var existingStudent = await _context.Students.FindAsync(id);
            if (existingStudent == null)
            {
                return false;
            }

            _mapper.Map(studentDto, existingStudent);
            _context.Students.Update(existingStudent);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteStudentAsync(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
            return false;
            }

            var user = await _context.Users.FindAsync(student.UserId);
            if (user != null)
            {
            _context.Users.Remove(user);
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return true;
        }

    public async Task<int> GetStudentIdFromUsername(string username)
    {
        var studentId = await _context.Students
            .Join(_context.Users, s => s.UserId, u => u.Id, (s, u) => new { Student = s, User = u })
            .Where(su => su.User.UserName == username)
            .Select(su => su.Student.Id)
            .SingleOrDefaultAsync();
        
        return studentId;
    }

        // Existing methods for additional student details
        public async Task<int> GetClassAttendanceForStudentAsync(int studentId)
        {
            return await _context.Attendances
                                 .Where(a => a.StudentId == studentId && a.Status)
                                 .CountAsync();
        }
        public async Task<int> GetClassMissedForStudentAsync(int studentId)
        {
            return await _context.Attendances
                                 .Where(a => a.StudentId == studentId && !a.Status)
                                 .CountAsync();
        }

        public async Task<double> GetTotalGradeForStudentAsync(int studentId)
        {
            return await _context.StudentCourses
                                 .Where(sc => sc.StudentId == studentId)
                                 .SumAsync(sc => sc.StudentMark);
        }

        public async Task<int> GetNumberOfCoursesForStudentAsync(int studentId)
        {
            return await _context.StudentCourses
                                 .CountAsync(sc => sc.StudentId == studentId);
        }

        public async Task<List<CourseGradeDto>> GetGradesForStudentInCoursesAsync(int studentId)
        {
            return await _context.StudentCourses
                                 .Where(sc => sc.StudentId == studentId)
                                 .Select(sc => new CourseGradeDto
                                 {
                                     CourseId = sc.CourseId,
                                     CourseName = sc.Course.Name,
                                     StudentMark = sc.StudentMark
                                 })
                                 .ToListAsync();
        }

        // New methods for additional statistics
        public async Task<List<StudentHomeWorkDto>> GetHomeworksForStudentAsync(int studentId)
        {
            return await _context.Homeworks
                                 .Where(hw => _context.StudentCourses
                                                    .Any(sc => sc.StudentId == studentId && sc.CourseId == hw.CourseId))
                                 .Select(hw => new StudentHomeWorkDto
                                 {
                                     HomeworkId = hw.Id,
                                     Title = hw.Title,
                                     Description = hw.Description,
                                     DueDate = hw.DueDate,
                                     Status = _context.StudentHomeworks
                                                      .Where(sh => sh.StudentId == studentId && sh.HomeworkId == hw.Id)
                                                      .Select(sh => sh.Status)
                                                      .FirstOrDefault()
                                 })
                                 .ToListAsync();
        }
        public async Task<int> GetCompletedHomeworkCountForStudentAsync(int studentId)
        {
            return await _context.StudentHomeworks
                                 .Where(sh => sh.StudentId == studentId && (sh.Status == "Completed" || sh.Status == "Done"))
                                 .CountAsync();
        }

        public async Task<int> GetPendingHomeworkCountForStudentAsync(int studentId)
        {
            return await _context.StudentHomeworks
                                 .Where(sh => sh.StudentId == studentId && (sh.Status == "Pending" || sh.Status == "Not Completed"))
                                 .CountAsync();
        }

        public async Task<List<string>> GetCourseNamesForStudentAsync(int studentId)
        {
            return await _context.StudentCourses
                                 .Where(sc => sc.StudentId == studentId)
                                 .Include(sc => sc.Course)
                                 .Select(sc => sc.Course.Name)
                                 .ToListAsync();
        }

        public async Task<List<CourseTeacher>> GetCourseTeachersForStudentAsync(int studentId)
        {
            return await _context.Courses
                                 .Where(c => c.StudentCourses.Any(sc => sc.StudentId == studentId))
                                 .Select(c => new CourseTeacher
                                 {
                                     CourseId = c.Id,
                                     CourseName = c.Name,
                                     TeacherId = c.TeacherId,
                                     TeacherName = c.Teacher.FirstName + " " + c.Teacher.LastName
                                 })
                                 .ToListAsync();
        }

        public async Task<List<ExamDto>> GetCourseExamsForStudentAsync(int studentId)
        {
             return await _context.Exams
                                 .Where(e => e.Course.StudentCourses.Any(sc => sc.StudentId == studentId))
                                 .Select(e => new ExamDto
                                 {
                                     Id = e.Id,
                                     Name = e.Name,
                                     Status = e.Status,
                                     MaxMark = e.MaxMark,
                                     Date = e.Date,
                                     Time = e.Time,
                                     CourseId = e.CourseId,
                                     CourseName = e.Course.Name
                                 })
                                 .ToListAsync();

        }
    }
}
