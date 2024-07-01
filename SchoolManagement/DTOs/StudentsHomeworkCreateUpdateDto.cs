namespace SchoolManagement.Dtos
{
    public class StudentsHomeworkCreateUpdateDto
    {
        public int StudentId { get; set; }
        public int HomeworkId { get; set; }
        public DateTime SubmitDate { get; set; }
        public string Status { get; set; } 
    }
}
