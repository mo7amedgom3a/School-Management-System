using  SchoolManagement.Models;
namespace SchoolManagement.Dtos
{
    public class StudentRegisterDTO
{
    public string Username { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Gender { get; set; }
    public DateTime BirthDate { get; set; }
    public string Address { get; set; }
    public string ImgUrl { get; set; }
    public int DeptId { get; set; }
    public string CurrentYear { get; set; }
    
}

}