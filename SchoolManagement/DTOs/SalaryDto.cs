namespace SchoolManagement.Dtos
{
    public class SalaryDto
    {
        public int Id { get; set; }
        public int TeacherId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentStatus { get; set; }
        public string TeacherName { get; set; }
    }
}
