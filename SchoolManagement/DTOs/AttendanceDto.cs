namespace SchoolManagement.Dtos
{
    public class AttendanceDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public Boolean Status { get; set; }
        public int StudentId { get; set; }
        public string StudentName { get; set; } // New property
        public int CourseId { get; set; }
        public string CourseName { get; set; } // New property
    }
}
