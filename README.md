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

![backend](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/backend.png?raw=true)
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
![home](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/Homepage.png?raw=true)
- **Login Page**: Allows users to log in to the system.

![login](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/login.PNG?raw=true)
- **Register for Student**: Registration form for students.
![Register student](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/studentRegister.PNG?raw=true)
- **Register for Teacher**: Registration form for teachers.
![Register teacher](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/teacherRegister.PNG?raw=true)
- **Admin Dashboard**: Admin control panel for managing users and classes.

![Admin](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/Admin.png?raw=true)
- **Student Dashboard**: Dashboard for students to view their assignments and progress.

![student](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/studentDashboard.png?raw=true)
- **Teacher Dashboard**: Dashboard for teachers to manage their classes and assignments.

1) **Student list** ![teacher](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/teacherStudents.png?raw=true)
2) **HomeWorks**![teacher](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/homeworks.png?raw=true)
3) **Exams** ![teacher](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/exams.png?raw=true)
4) **Grads** ![teacher](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/grads.png?raw=true)
## Database Structure
The database is structured to support the various functionalities of the system. Below is the Entity Relationship Diagram (ERD) for the database:

### SchoolDB ERD
![ERD](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/school_db.png?raw=true)

### SchoolDB Identity ERD
![ERD](https://github.com/mo7amedgom3a/School-Management-System/blob/main/Front/school-front/public/school_identity_db.png?raw=true)
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
# Docker
you can pull image and use it and can create it manually
### Pull The Image
```bash
docker pull mohamedgomaa77/school-management:latest
```
### Building Docker Images
1) Create a `Dockerfile` for the .NET backend:
```bash
# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SchoolManagement/SchoolManagement.csproj", "SchoolManagement/"]
RUN dotnet restore "SchoolManagement/SchoolManagement.csproj"
COPY . .
WORKDIR "/src/SchoolManagement"
RUN dotnet build "SchoolManagement.csproj" -c Release -o /app/build 

# Stage 2: Set up MySQL and the .NET application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build



# Publish the app to the /app/publish directory
FROM build AS publish
RUN dotnet publish "SchoolManagement.csproj" -c Release -o /app/publish

# Use the base image to run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "home/mohamed/School-Management-System/SchoolManagement/bin/Debug/net8.0/SchoolManagement.dll"]
```
2) Create a `Dockerfile` for MySQL:
```bash
# Use the official MySQL image
FROM mysql:5.7

# Copy the database schema file to the container
COPY ./SchoolDB.sql /docker-entrypoint-initdb.d/SchoolDB.sql

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=2003
ENV MYSQL_DATABASE=SchoolDB

```
3)  **Docker Compose**
Create a docker-compose.yml file to run both the .NET backend and MySQL together:
```bash
version: '3.8'

services:
  mysql:
    image: mysql:5.7
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: 2003
      MYSQL_DATABASE: SchoolDB
    volumes:
      - ./SchoolDB.sql:/docker-entrypoint-initdb.d/SchoolDB.sql
    ports:
      - "3306:3306"

  backend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: backend
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ConnectionStrings__DefaultConnection=Server=mysql;Database=SchoolDB;User=root;Password=2003;
    depends_on:
      - mysql
    ports:
      - "5143:80"

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

```
### Running the Containers
To build and run the containers, use the following commands:
```bash
docker-compose build
docker-compose up
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

