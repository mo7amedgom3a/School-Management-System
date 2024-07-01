namespace SchoolManagement.Models
{
    public class StudentHomework
    {
        public int StudentId { get; set; }
        public Student Student { get; set; }

        public int HomeworkId { get; set; }
        public Homework Homework { get; set; }
        public string FileUrl { get; set; }

        public DateTime SubmitDate { get; set; }
        public string Status { get; set; }
    }
}
