# School Management System

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Backend Architecture](#backend-architecture)
  - [Controllers](#controllers)
  - [Services](#services)
  - [Repositories](#repositories)
  - [Models](#models)
  - [Interfaces](#interfaces)
- [Frontend Description](#frontend-description)
  - [Pages](#pages)
- [Database Structure](#database-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Admin Access](#admin-access)
- [MVP Description](#mvp-description)
  - [Student](#student)
  - [Teacher](#teacher)
  - [Admin](#admin)
- [Screenshots](#screenshots)

## Overview
The School Management System is a comprehensive web application designed to streamline the administrative tasks of schools and educational institutions. The system allows admins to manage students and teachers, teachers to manage their classes and assignments, and students to view their progress and submit homework.

## Technologies Used
- **Backend**: ASP.NET Core 8.0
- **Frontend**: Next.js, React
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token)
- **Package Management**: npm (Node Package Manager)
- **Server Management**: Nginx (as a reverse proxy)

## Backend Architecture
The backend is structured to follow the Clean Architecture principles, which separate the concerns of the application and make the codebase more maintainable.

![backend]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")

### Controllers
Controllers handle incoming HTTP requests, pass them to the appropriate service, and return the HTTP response.

### Services
Services contain the business logic of the application. They interact with repositories to fetch or store data.

### Repositories
Repositories handle the data access logic. They communicate with the database and perform CRUD operations.

### Models
Models represent the data structures used in the application.

### Interfaces
Interfaces define contracts that services and repositories must adhere to. This promotes loose coupling and makes the code more testable.

## Frontend Description
The frontend is built using Next.js, a React framework that enables server-side rendering and static site generation.

### Pages
- **Home Page**: The landing page of the application.
![home]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Login Page**: Allows users to log in to the system.

![login]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Register for Student**: Registration form for students.
![Register student]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Register for Teacher**: Registration form for teachers.
![Register teacher]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Admin Dashboard**: Admin control panel for managing users and classes.

![Admin]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Student Dashboard**: Dashboard for students to view their assignments and progress.

![student]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
- **Teacher Dashboard**: Dashboard for teachers to manage their classes and assignments.

1) **Student list** ![teacher]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
2) **HomeWorks**![teacher]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
3) **Exams** ![teacher]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
4) **Grads** ![teacher]("/home/mohamed/School-Management-System/Front/school-front/public/Admin.jpg")
## Database Structure
The database is structured to support the various functionalities of the system. Below is the Entity Relationship Diagram (ERD) for the database:

![ERD](path-to-ERD-image)

## Installation
To install the necessary dependencies for the project, run the following script:

```bash
#!/bin/bash

# Install .NET SDK 8
wget https://download.visualstudio.microsoft.com/download/pr/62162bfc-7d8a-4ebc-9e1f-dde5339c86c8/1da63f73e00d2e05e6ed6b9d316eb301/dotnet-sdk-8.0.100-linux-x64.tar.gz -O dotnet-sdk.tar.gz
mkdir -p $HOME/dotnet && tar zxf dotnet-sdk.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet

# Install Node.js using nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source $NVM_DIR/nvm.sh
nvm install 20
nvm use 20

# Install MySQL
sudo apt-get update
sudo apt-get install -y mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql

# Install frontend dependencies
cd frontend
npm install
```
# Running the Project
To run the project, execute the following script:
```bash
#!/bin/bash

# Start MySQL service
sudo systemctl start mysql

# Create database and import data
mysql -u root -p -e "CREATE DATABASE SchoolDB;"
mysql -u root -p SchoolDB < path-to-SchoolDB.sql

# Run backend
cd backend
dotnet restore
dotnet run &

# Run frontend
cd ../frontend
npm run dev
```
# MVP Description


### Student
The student can view their enrolled courses, grades, attendance records, homework assignments, and exams. They can also upload their completed homework assignments.

### Teacher
The teacher can create and assign homework assignments to students. They can also take attendance for students, view a list of students in their class, and update homework assignments and exams. Additionally, teachers can add and update grades for students.

### Admin
The admin has access to various statistics about the school. They can view a list of students, add courses for students, view a list of teachers, delete teachers, view a list of departments, add new departments, and view a list of courses. The admin can also add new courses.


# Admin Access
To access the admin dashboard, use the following credentials:
- **Username**: MohamedGom3a
- **Password**: printf('helloWORLD123')

# License
The project is licensed under the MIT License, which grants users the freedom to use, modify, and distribute the software for both commercial and non-commercial purposes. The license also includes a disclaimer of warranty and limitation of liability. For more details, please refer to the LICENSE file.The project is licensed under the MIT License, which grants users the freedom to use, modify, and distribute the software for both commercial and non-commercial purposes. The license also includes a disclaimer of warranty and limitation of liability. For more details, please refer to the LICENSE file.

