using SchoolManagement.Models;

namespace SchoolManagement.Dtos
{
    public class TeacherDto: PersonInformation
    {
        public string Specialization { get; set; }
        public int DeptId { get; set; }
        public string UserId { get; set; }
        
    }
}
