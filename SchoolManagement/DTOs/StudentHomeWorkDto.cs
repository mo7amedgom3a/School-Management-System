namespace SchoolManagement.Dtos
{
    public class StudentHomeWorkDto
    {
          public int HomeworkId { get; set; }
          public string Title { get; set; }
          public string Description { get; set; }
            public DateTime DueDate { get; set; }
            public string FileUrl { get; set; }
            public string CourseName { get; set; }
            public string Status { get; set; }

    }
}