namespace SchoolManagement.Models
{
    public class Attendance
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }

        // Foreign Keys
        public int StudentId { get; set; }
        public Student Student { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
