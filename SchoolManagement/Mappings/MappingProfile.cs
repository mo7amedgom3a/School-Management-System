using AutoMapper;
using SchoolManagement.Dtos;
using SchoolManagement.Models;

namespace SchoolManagement.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Department Mappings
            CreateMap<Department, DepartmentDto>().ReverseMap();
            CreateMap<Department, DepartmentCreateUpdateDto>().ReverseMap();

            // Course Mappings
            CreateMap<Course, CourseDto>().ReverseMap();
            CreateMap<Course, CourseCreateUpdateDto>().ReverseMap();

            CreateMap<Teacher, TeacherDto>().ReverseMap();
            CreateMap<Teacher, TeacherCreateUpdateDto>().ReverseMap();
        }
    }
}
