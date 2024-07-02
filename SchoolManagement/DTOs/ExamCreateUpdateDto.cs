using SchoolManagement.Dtos;
namespace SchoolManagement.Dtos
{
    public class ExamCreateUpdateDto
    {
        public string Name { get; set; }
        public string Status { get; set; }
        public double MaxMark { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public int CourseId { get; set; }
        public int TeacherId { get; set; }
    }
}
