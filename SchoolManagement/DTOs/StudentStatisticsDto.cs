namespace SchoolManagement.Dtos
{
    public class StudentStatisticsDto
    {
        public int StudentId { get; set; }
        public string FullName { get; set; }
        public string Department { get; set; }
        public double? AverageMarks { get; set; }
        public int TotalCoursesEnrolled { get; set; }
        public int TotalHomeworkSubmitted { get; set; }
        public int AttendanceCount { get; set; }
    }
}
