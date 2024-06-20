namespace SchoolManagement.Dtos
{
    public class AdminStatisticsDto
    {
        public int TotalStudents { get; set; }
        public int TotalTeachers { get; set; }
        public int TotalCourses { get; set; }
        public int TotalDepartments { get; set; }
        public decimal TotalSalaryPaid { get; set; }
        public decimal AverageSalary { get; set; }
        public double AverageStudentMarks { get; set; }
        public int TotalHomeworkAssignments { get; set; }
    }
}
