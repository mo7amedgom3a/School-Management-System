namespace SchoolManagement.Models
{
    public class Student: PersonInformation
    {
  

        // Foreign Keys
        public int GradeId { get; set; }
        public Grade Grade { get; set; }

        public int DeptId { get; set; }
        public Department Department { get; set; }

        // Navigation Properties
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
        public ICollection<StudentHomework> StudentHomeworks { get; set; }
    }
}
