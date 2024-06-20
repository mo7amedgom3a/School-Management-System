namespace SchoolManagement.Dtos
{
    public class SalaryDto : SalaryCreateUpdateDto
    {
        public int Id { get; set; }
        public string TeacherName { get; set; }
    }
}
