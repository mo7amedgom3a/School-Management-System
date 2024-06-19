namespace SchoolManagement.Models
{
    public class StudentCourse
    {
        public int FullMark { get; set; }
        public int StudentMark { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
