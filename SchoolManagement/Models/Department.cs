namespace SchoolManagement.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Navigation Properties
        public ICollection<Student> Students { get; set; }
        public ICollection<Teacher> Teachers { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}
