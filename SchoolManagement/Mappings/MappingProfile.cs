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

            CreateMap<Course, CourseDto>().ReverseMap();
            CreateMap<Course, CourseCreateUpdateDto>().ReverseMap();

            CreateMap<Teacher, TeacherDto>().ReverseMap();
            CreateMap<Teacher, TeacherCreateUpdateDto>().ReverseMap();

            CreateMap<Homework, HomeworkDto>().ReverseMap();
            CreateMap<Homework, HomeworkCreateUpdateDto>().ReverseMap();
            
            CreateMap<Exam, ExamDto>().ReverseMap();
            CreateMap<Exam, ExamCreateUpdateDto>().ReverseMap();

            CreateMap<Attendance, AttendanceDto>().ReverseMap();
            CreateMap<Attendance, AttendanceCreateUpdateDto>().ReverseMap();

            CreateMap<StudentCourse, StudentCourseDto>()
                .ForMember(dest => dest.StudentName, opt => opt.MapFrom(src => $"{src.Student.FirstName} {src.Student.LastName}"))
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.Course.Name))
                .ReverseMap();

            CreateMap<StudentCourse, StudentCourseCreateUpdateDto>().ReverseMap();
        }
    }
}
