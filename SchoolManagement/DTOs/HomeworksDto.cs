namespace SchoolManagement.Dtos
{
    public class HomeworksDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int TeacherId { get; set; }
        public int CourseId { get; set; }
        public string CourseName { get; set;}
        public string FileUrl { get; set; }
    }
}
