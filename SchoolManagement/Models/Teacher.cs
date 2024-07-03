using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace SchoolManagement.Models
{
    public class Teacher: PersonInformation
    {
        public int Id { get; set; }
        public string Specialization { get; set; }

        // Foreign Key
        public int DeptId { get; set; }
        public Department Department { get; set; }

        public string UserId { get; set; }
        public IdentityUser User { get; set; }
        // Navigation Properties
        public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Exam> Exams { get; set; }
        public ICollection<Course> Courses { get; set; }
        public ICollection<Salary> Salaries { get; set; }
        
    }
}
