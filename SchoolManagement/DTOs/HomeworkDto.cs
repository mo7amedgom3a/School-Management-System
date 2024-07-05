namespace SchoolManagement.Dtos
{
    public class HomeworkDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int TeacherId { get; set; }
        public int CourseId { get; set; }
    }
}
