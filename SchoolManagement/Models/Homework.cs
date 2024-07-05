namespace SchoolManagement.Models
{
    public class Homework
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        

        // Foreign Keys
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }

        // Navigation Properties
        public ICollection<StudentHomework> StudentHomeworks { get; set; }
    }
}
