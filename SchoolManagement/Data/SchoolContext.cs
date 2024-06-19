using Microsoft.EntityFrameworkCore;
using SchoolManagement.Models;

namespace SchoolManagement.Data
{
    public class SchoolContext : DbContext
    {
        public SchoolContext(DbContextOptions<SchoolContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Homework> Homeworks { get; set; }
        public DbSet<Exam> Exams { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<StudentHomework> StudentHomeworks { get; set; }
        public DbSet<StudentCourse> StudentCourses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuring composite keys
            modelBuilder.Entity<StudentHomework>()
                .HasKey(sh => new { sh.StudentId, sh.HomeworkId });

            modelBuilder.Entity<StudentCourse>()
                .HasKey(sc => new { sc.StudentId, sc.CourseId });

            // Defining relationships

            modelBuilder.Entity<Student>()
                .HasOne(s => s.Department)
                .WithMany(d => d.Students)
                .HasForeignKey(s => s.DeptId);

            modelBuilder.Entity<Teacher>()
                .HasOne(t => t.Department)
                .WithMany(d => d.Teachers)
                .HasForeignKey(t => t.DeptId);

            modelBuilder.Entity<Course>()
                .HasOne(c => c.Department)
                .WithMany(d => d.Courses)
                .HasForeignKey(c => c.DeptId);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Teacher)
                .WithMany(t => t.Homeworks)
                .HasForeignKey(h => h.TeacherId);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Course)
                .WithMany(c => c.Homeworks)
                .HasForeignKey(h => h.CourseId);

            modelBuilder.Entity<Exam>()
                .HasOne(e => e.Teacher)
                .WithMany(t => t.Exams)
                .HasForeignKey(e => e.TeacherId);

            modelBuilder.Entity<Exam>()
                .HasOne(e => e.Course)
                .WithMany(c => c.Exams)
                .HasForeignKey(e => e.CourseId);

            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Student)
                .WithMany(s => s.Attendances)
                .HasForeignKey(a => a.StudentId);

            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Course)
                .WithMany(c => c.Attendances)
                .HasForeignKey(a => a.CourseId);

            modelBuilder.Entity<StudentHomework>()
                .HasOne(sh => sh.Student)
                .WithMany(s => s.StudentHomeworks)
                .HasForeignKey(sh => sh.StudentId);

            modelBuilder.Entity<StudentHomework>()
                .HasOne(sh => sh.Homework)
                .WithMany(h => h.StudentHomeworks)
                .HasForeignKey(sh => sh.HomeworkId);

            modelBuilder.Entity<StudentCourse>()
                .HasOne(sc => sc.Student)
                .WithMany(s => s.StudentCourses)
                .HasForeignKey(sc => sc.StudentId);

            modelBuilder.Entity<StudentCourse>()
                .HasOne(sc => sc.Course)
                .WithMany(c => c.StudentCourses)
                .HasForeignKey(sc => sc.CourseId);

            // Configuring data types for MySQL compatibility
            modelBuilder.Entity<Department>().Property(d => d.Name).HasColumnType("varchar(100)");
            modelBuilder.Entity<Student>().Property(s => s.FirstName).HasColumnType("varchar(100)");
            modelBuilder.Entity<Student>().Property(s => s.LastName).HasColumnType("varchar(100)");
            modelBuilder.Entity<Student>().Property(s => s.Gender).HasColumnType("varchar(10)");
            modelBuilder.Entity<Student>().Property(s => s.Address).HasColumnType("varchar(255)");
            modelBuilder.Entity<Student>().Property(s => s.ImgUrl).HasColumnType("varchar(255)");

            modelBuilder.Entity<Teacher>().Property(t => t.FirstName).HasColumnType("varchar(100)");
            modelBuilder.Entity<Teacher>().Property(t => t.LastName).HasColumnType("varchar(100)");
            modelBuilder.Entity<Teacher>().Property(t => t.Specialization).HasColumnType("varchar(100)");

            modelBuilder.Entity<Homework>().Property(h => h.Title).HasColumnType("varchar(200)");
            modelBuilder.Entity<Homework>().Property(h => h.Description).HasColumnType("text");
            modelBuilder.Entity<Homework>().Property(h => h.FileUrl).HasColumnType("varchar(255)");

            modelBuilder.Entity<Exam>().Property(e => e.Name).HasColumnType("varchar(200)");

            modelBuilder.Entity<Course>().Property(c => c.Name).HasColumnType("varchar(100)");
        }
    }
}
