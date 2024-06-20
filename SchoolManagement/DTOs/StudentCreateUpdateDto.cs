namespace SchoolManagement.Dtos
{
    public class StudentCreateUpdateDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime EnrollDate { get; set; }
        public string Address { get; set; }
        public string ImgUrl { get; set; }
        public string CurrentYear { get; set; }
        public int DeptId { get; set; }
    }
}
