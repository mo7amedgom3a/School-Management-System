namespace SchoolManagement.Dtos
{
    public class StudentGradeDto
    {
        public int courseId {get; set; }
        public string CourseName { get; set; }
        public int StudentId {get; set;}
        public string StudentName { get; set; }
        public int  Grade { get; set; }
    }
}