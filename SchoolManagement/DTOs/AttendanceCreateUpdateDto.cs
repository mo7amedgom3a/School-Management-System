namespace SchoolManagement.Dtos
{
    public class AttendanceCreateUpdateDto
    {
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
    }
}
