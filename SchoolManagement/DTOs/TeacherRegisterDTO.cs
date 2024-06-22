using SchoolManagement.Models;

namespace SchoolManagement.Dtos
{
    public class TeacherRegisterDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Specialization { get; set; }
        public int DeptId { get; set; }
    }

}
