using AutoMapper;
using SchoolManagement.Dtos;
using SchoolManagement.Models;

namespace SchoolManagement.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Department, DepartmentDto>().ReverseMap();
            CreateMap<Department, DepartmentCreateUpdateDto>().ReverseMap();

            CreateMap<Teacher, TeacherDto>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.User.Id))
                .ReverseMap();

            CreateMap<Teacher, TeacherCreateUpdateDto>().ReverseMap();

            CreateMap<Course, CourseDto>()
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => src.Department.Name))
                .ForMember(dest => dest.TeacherName, opt => opt.MapFrom(src => src.Teacher.FirstName + " " + src.Teacher.LastName))
                .ReverseMap();
            
            CreateMap<Course, CourseCreateUpdateDto>().ReverseMap();

            CreateMap<Homework, HomeworkDto>().ReverseMap();
            CreateMap<Homework, HomeworkCreateUpdateDto>().ReverseMap();
            
            CreateMap<Exam, ExamDto>()
            .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.Course.Name))
            .ReverseMap();
            
            CreateMap<Exam, ExamCreateUpdateDto>()
            .ForMember(dest => dest.CourseId, opt => opt.MapFrom(src => src.Course.Id))
            .ForMember(dest => dest.TeacherId, opt => opt.MapFrom(src => src.Teacher.Id));

            CreateMap<Exam, ExamCreateUpdateDto>().ReverseMap();

            CreateMap<Attendance, AttendanceDto>()
                .ForMember(dest => dest.StudentName, opt => opt.MapFrom(src => src.Student.FirstName + " " + src.Student.LastName))
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.Course.Name));
            CreateMap<Attendance, AttendanceCreateUpdateDto>().ReverseMap();

            CreateMap<StudentCourse, StudentCourseDto>()
                .ForMember(dest => dest.StudentName, opt => opt.MapFrom(src => $"{src.Student.FirstName} {src.Student.LastName}"))
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.Course.Name))
                .ReverseMap();
            CreateMap<StudentCourse, StudentCourseCreateUpdateDto>().ReverseMap();

                CreateMap<StudentCourse, StudentCourseDto>()
                .ForMember(dest => dest.StudentName, opt => opt.MapFrom(src => src.Student.FirstName + " " + src.Student.LastName))
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.Course.Name))
                .ForMember(dest => dest.StudentMark, opt => opt.MapFrom(src => src.StudentMark));

                CreateMap<StudentHomework, StudentsHomeworkDto>()
                .ForMember(dest => dest.StudentName, opt => opt.MapFrom(src => $"{src.Student.FirstName} {src.Student.LastName}"))
                .ForMember(dest => dest.HomeworkTitle, opt => opt.MapFrom(src => src.Homework.Title))
                .ReverseMap();

            CreateMap<StudentHomework, StudentsHomeworkCreateUpdateDto>().ReverseMap();

            CreateMap<Salary, SalaryDto>()
                .ForMember(dest => dest.TeacherName, opt => opt.MapFrom(src => $"{src.Teacher.FirstName} {src.Teacher.LastName}"))
                .ReverseMap();
                
            CreateMap<Salary, SalaryCreateUpdateDto>().ReverseMap();

        }
    }
}