namespace SchoolManagement.Models
{
    public class Student: PersonInformation
    {
        public string  CurrentYear { get; set; } // first year, second year, third year, fourth year ...

        // Foreign Keys
        public int DeptId { get; set; }
        public Department Department { get; set; }

        // Navigation Properties
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
        public ICollection<StudentHomework> StudentHomeworks { get; set; }
    }
}
