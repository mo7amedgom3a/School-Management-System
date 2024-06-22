using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SchoolManagement.Migrations
{
    /// <inheritdoc />
    public partial class updatestudentAndTeacher : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EnrollDate",
                table: "Teachers",
                newName: "Enroll");

            migrationBuilder.RenameColumn(
                name: "EnrollDate",
                table: "Students",
                newName: "Enroll");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Enroll",
                table: "Teachers",
                newName: "EnrollDate");

            migrationBuilder.RenameColumn(
                name: "Enroll",
                table: "Students",
                newName: "EnrollDate");
        }
    }
}
