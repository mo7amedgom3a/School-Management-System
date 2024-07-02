
"use client"

import { useState } from "react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export function newcomponent() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    { id: 4, name: "Alice Williams", email: "alice@example.com" },
    { id: 5, name: "Tom Davis", email: "tom@example.com" },
  ])
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Sarah Lee", email: "sarah@example.com" },
    { id: 2, name: "Michael Chen", email: "michael@example.com" },
    { id: 3, name: "Emily Patel", email: "emily@example.com" },
    { id: 4, name: "David Gonzalez", email: "david@example.com" },
    { id: 5, name: "Olivia Nguyen", email: "olivia@example.com" },
  ])
  const [courses, setCourses] = useState([
    { id: 1, name: "Introduction to Computer Science", department: "Computer Science" },
    { id: 2, name: "Calculus I", department: "Mathematics" },
    { id: 3, name: "World History", department: "History" },
    { id: 4, name: "Biology 101", department: "Biology" },
    { id: 5, name: "English Composition", department: "English" },
  ])
  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Mathematics" },
    { id: 3, name: "History" },
    { id: 4, name: "Biology" },
    { id: 5, name: "English" },
  ])
  const [newCourse, setNewCourse] = useState({ name: "", department: "" })
  const [newDepartment, setNewDepartment] = useState("")
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }
  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id))
  }
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id))
  }
  const handleAddCourse = () => {
    if (newCourse.name && newCourse.department) {
      setCourses([...courses, { id: courses.length + 1, ...newCourse }])
      setNewCourse({ name: "", department: "" })
    }
  }
  const handleAddDepartment = () => {
    if (newDepartment) {
      setDepartments([...departments, { id: departments.length + 1, name: newDepartment }])
      setNewDepartment("")
    }
  }
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>School Management</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <div className="text-2xl font-bold">{departments.length}</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Total number of departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses</CardTitle>
              <div className="text-2xl font-bold">{courses.length}</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Total number of courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <div className="text-2xl font-bold">{teachers.length}</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Total number of teachers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Students</CardTitle>
              <div className="text-2xl font-bold">{students.length}</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Total number of students</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Students</CardTitle>
              <Button size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Student
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" onClick={() => handleDeleteStudent(student.id)}>
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <Button size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Teacher
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell className="font-medium">{teacher.name}</TableCell>
                      <TableCell>{teacher.email}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" onClick={() => handleDeleteTeacher(teacher.id)}>
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses</CardTitle>
              <Button size="sm" onClick={handleAddCourse}>
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.name}</TableCell>
                      <TableCell>{course.department}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" onClick={() => handleDeleteCourse(course.id)}>
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>
                      <Input
                        placeholder="Course Name"
                        value={newCourse.name}
                        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Department"
                        value={newCourse.department}
                        onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost" onClick={handleAddCourse}>
                        <PlusIcon className="w-4 h-4" />
                        <span className="sr-only">Add Course</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Button size="sm" onClick={handleAddDepartment}>
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departments.map((department) => (
                    <TableRow key={department.id}>
                      <TableCell className="font-medium">{department.name}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>
                      <Input
                        placeholder="Department Name"
                        value={newDepartment}
                        onChange={(e) => setNewDepartment(e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost" onClick={handleAddDepartment}>
                        <PlusIcon className="w-4 h-4" />
                        <span className="sr-only">Add Department</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
