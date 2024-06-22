import mysql.connector
from faker import Faker
import random


fake = Faker()


db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="2003",
    database="SchoolDB"
)

cursor = db.cursor()

def seed_students(n=10):
    for _ in range(n):
        fname = fake.first_name()
        lname = fake.last_name()
        gender = random.choice(['Male', 'Female'])
        birth_date = fake.date_of_birth(minimum_age=18, maximum_age=25)
        enroll_date = fake.date_this_decade()
        address = fake.address()
        img_url = fake.image_url()
        dept_id = 1
        currnt_year = random.choice(['first year','second year','third year','fourth year'])
        
        cursor.execute("""
            INSERT INTO Students (FirstName, LastName, Gender, BirthDate, EnrollDate, Address, ImgUrl, DeptId, CurrentYear)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (fname, lname, gender, birth_date, enroll_date, address, img_url, dept_id, currnt_year))
        
    db.commit()



seed_students(100)  


cursor.close()
db.close()
