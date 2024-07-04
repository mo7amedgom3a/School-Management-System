using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;

namespace SchoolManagement
{
    public class AdminAccountInitializer
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            // Ensure the admin role exists
            string roleName = "Admin";
            if (!await roleManager.RoleExistsAsync(roleName))
            {
                await roleManager.CreateAsync(new IdentityRole(roleName));
            }

            // Check if the admin user already exists
            var adminUser = await userManager.FindByNameAsync("admin");
            if (adminUser == null)
            {
                // Create a new admin user
                adminUser = new IdentityUser
                {
                    UserName = "MohamedGom3a",
                };

                string adminPassword = "printf('hello')"; // Replace with a strong password

                var result = await userManager.CreateAsync(adminUser, adminPassword);

                if (result.Succeeded)
                {
                    // Assign the admin role to the user
                    await userManager.AddToRoleAsync(adminUser, roleName);
                }
            }
        }
    }
}
