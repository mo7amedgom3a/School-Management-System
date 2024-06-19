namespace SchoolManagement.Models
{
    public class Student: PersonInformation
    {
  
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string Address { get; set; }
        public string ImgUrl { get; set; }

        // Foreign Keys
        public int DeptId { get; set; }
        public Department Department { get; set; }

        // Navigation Properties
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
        public ICollection<StudentHomework> StudentHomeworks { get; set; }
    }
}
