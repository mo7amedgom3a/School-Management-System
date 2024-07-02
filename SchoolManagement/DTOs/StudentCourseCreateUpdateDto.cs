namespace SchoolManagement.Dtos
{
    public class StudentCourseCreateUpdateDto
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public int FullMark { get; set; }
        public double StudentMark { get; set; }
    }
}
