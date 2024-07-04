using SchoolManagement.Models;

namespace SchoolManagement.Dtos
{
    public class TeacherRegisterDTO:PersonInformation
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Specialization { get; set; }
        public int DeptId { get; set; }
    }

}
