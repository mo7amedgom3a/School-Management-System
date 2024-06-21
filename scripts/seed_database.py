import mysql.connector
from faker import Faker
import random

# Initialize Faker
fake = Faker()

# Connect to MySQL
db = mysql.connector.connect(
    host="localhost",
    user="your_mysql_user",
    password="your_mysql_password",
    database="your_database_name"
)

cursor = db.cursor()

# Insert fake data into Student table
def seed_students(n=10):
    for _ in range(n):
        fname = fake.first_name()
        lname = fake.last_name()
        gender = random.choice(['Male', 'Female'])
        birth_date = fake.date_of_birth(minimum_age=18, maximum_age=25)
        enroll_date = fake.date_this_decade()
        address = fake.address()
        img_url = fake.image_url()
        grade_id = random.randint(1, 5)  # Assuming you have some predefined grades
        dept_id = random.randint(1, 3)  # Assuming you have some predefined departments
        
        cursor.execute("""
            INSERT INTO Students (FirstName, LastName, Gender, BirthDate, EnrollDate, Address, ImgUrl, GradeId, DeptId)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (fname, lname, gender, birth_date, enroll_date, address, img_url, grade_id, dept_id))
        
    db.commit()

# Insert fake data into other tables as needed
# For example, seed_courses, seed_teachers, seed_homeworks, etc.

seed_students(100)  # Insert 100 fake students

# Close the database connection
cursor.close()
db.close()
