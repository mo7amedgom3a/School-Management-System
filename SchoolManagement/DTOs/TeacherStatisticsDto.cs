namespace SchoolManagement.Dtos
{
    public class TeacherStatisticsDto
    {
        public int TeacherId { get; set; }
        public string FullName { get; set; }
        public string Department { get; set; }
        public int TotalCourses { get; set; }
        public decimal TotalSalary { get; set; }
        public int TotalHomeworkAssigned { get; set; }
        public int TotalExamsConducted { get; set; }
    }
}
