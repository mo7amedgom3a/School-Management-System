namespace SchoolManagement.Dtos
{
    public class StudentDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime EnrollDate { get; set; }
        public string Address { get; set; }
        public string UserId { get; set; }
        public string ImgUrl { get; set; }
        public int DeptId { get; set; }
        public string CurrentYear { get; set; }
        public string DepartmentName { get; set; }  
        public double TotalGrade { get; set; }
        public int NumberOfCourses { get; set; }
        public List<CourseGradeDto> CourseGrades { get; set; }

        public int CompletedHomeworkCount { get; set; }
        public int PendingHomeworkCount { get; set; }
        public int ClassAttendance { get; set; }
        public int ClassMissed { get; set; }
        public List<string> CourseNames { get; set; }
        public List<CourseTeacher> CourseTeachers { get; set; }
        public List<ExamDto> CourseExams { get; set; }
        public List<StudentHomeWorkDto> Homeworks { get; set; }

    }
}
