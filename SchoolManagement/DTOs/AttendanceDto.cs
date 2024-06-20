namespace SchoolManagement.Dtos
{
    public class AttendanceDto
    {
        public DateTime Date { get; set; }
        public Boolean Status { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
    }
}
