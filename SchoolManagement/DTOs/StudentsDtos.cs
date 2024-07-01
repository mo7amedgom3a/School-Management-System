namespace SchoolManagement.Dtos
{
    public class StudentsDto
    {
        public int Id { get; set; }
        public int deptId { get; set; }
        public int CourseId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DepartmentName { get; set; }
        public string CourseName { get; set; }
    }
}