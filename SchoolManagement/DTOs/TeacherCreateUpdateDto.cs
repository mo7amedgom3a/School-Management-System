using SchoolManagement.Models;

namespace SchoolManagement.Dtos
{
    public class TeacherCreateUpdateDto: PersonInformation
    {
        public string Specialization { get; set; }
        public int DeptId { get; set; }
    }
}
