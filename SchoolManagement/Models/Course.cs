namespace SchoolManagement.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Foreign Key
        public int DeptId { get; set; }
        public Department Department { get; set; }

        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        // Navigation Properties
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Exam> Exams { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
    }
}
