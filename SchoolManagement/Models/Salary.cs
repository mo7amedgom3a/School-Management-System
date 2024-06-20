using System;

namespace SchoolManagement.Models
{
    public class Salary 
    {
        public int Id { get; set; }
        public int TeacherId { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string PaymentStatus { get; set; }

        public Teacher Teacher { get; set; }
    }
}