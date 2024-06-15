namespace SchoolManagement.Models
{
    public class Exam
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public int MaxMark { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }

        // Foreign Keys
        public int CourseId { get; set; }
        public Course Course { get; set; }

        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
