namespace SchoolManagement.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public int FullMark { get; set; }
        public int StudentMark { get; set; }

        // Navigation Properties
        public ICollection<Student> Students { get; set; }
    }
}
