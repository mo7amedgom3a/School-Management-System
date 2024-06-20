namespace SchoolManagement.Dtos
{
    public class SalaryCreateUpdateDto
    {
        public int TeacherId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentStatus { get; set; }
    }
}
