namespace SchoolManagement.Dtos
{
    public class StudentCourseDto : StudentCourseCreateUpdateDto
    {
        public string StudentName { get; set; }
        public string CourseName { get; set; }
    }
}
