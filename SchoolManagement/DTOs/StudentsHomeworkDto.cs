namespace SchoolManagement.Dtos
{
    public class StudentsHomeworkDto
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int HomeworkId { get; set; }
        public DateTime SubmitDate { get; set; }
        public string Status { get; set; }
        public string FileUrl { get; set; }
        public string StudentName { get; set; }
        public string HomeworkTitle { get; set; }
    }
}
