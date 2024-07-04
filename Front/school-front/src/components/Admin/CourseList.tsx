"use client"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { PlusIcon, TrashIcon } from "../Teacher/icons" // Adjust the path as needed

// Define interfaces for the data structures
interface Course {
  id: number
  name: string
  departmentId: number
  departmentName: string
  teacherName: string
}

interface Department {
  id: number
  name: string
}

interface Teacher {
  id: number
  firstName: string
  lastName: string
}

export function CourseList() {
  const [courses, setCourses] = useState<Course[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [newCourse, setNewCourse] = useState<{ name: string, deptId: number, teacherId: number }>({
    name: "",
    deptId: 0,
    teacherId: 0
  })

  useEffect(() => {
    // Fetch courses, departments, and teachers data
    Promise.all([
      fetch("http://localhost:5143/api/Course",{
        headers: new Headers({
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        })
      }).then(res => res.json()),
      fetch("http://localhost:5143/api/Department",{
        headers: new Headers({
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        })
      }).then(res => res.json()),
      fetch("http://localhost:5143/api/Teacher",{
        headers: new Headers({
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        })
      }).then(res => res.json())
    ]).then(([coursesData, departmentsData, teachersData]) => {
      setCourses(coursesData)
      setDepartments(departmentsData)
      setTeachers(teachersData)
    }).catch(error => console.error("Error fetching data:", error))
  }, [])

  const handleAddCourse = () => {
    if (!newCourse.name || !newCourse.deptId || !newCourse.teacherId) {
      alert("Please fill in all fields.")
      return
    }

    const department = departments.find(d => d.id === newCourse.deptId)
    const teacher = teachers.find(t => t.id === newCourse.teacherId)

    const courseToAdd: Course = {
      id: courses.length + 1,
      name: newCourse.name,
      departmentId: newCourse.deptId,
      departmentName: department?.name || "",
      teacherName: `${teacher?.firstName} ${teacher?.lastName}`
    }

    setCourses([...courses, courseToAdd])

    // Reset the new course form
    setNewCourse({ name: "", deptId: 0, teacherId: 0 })

    // Post the new course to the server
    fetch("http://localhost:5143/api/Course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        name: newCourse.name,
        deptId: newCourse.deptId,
        teacherId: newCourse.teacherId
      })
    }).then(res => {
      if (!res.ok) {
        throw new Error("Failed to add course")
      }
      return res.json()
    }).then(data => {
      console.log("Course added successfully:", data)
    }).catch(error => {
      console.error("Error adding course:", error)
    })
  }

  const handleDeleteCourse = (id: number) => {
    const message = window.confirm("Are you sure you want to delete this course?")
    if (message) {
      const updatedCourses = courses.filter(course => course.id !== id)
      setCourses(updatedCourses)

      // Delete the course from the server
      fetch(`http://localhost:5143/api/Course/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error("Failed to delete course")
        }
        console.log("Course deleted successfully")
      }).catch(error => {
        console.error("Error deleting course:", error)
      })
    }
    
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Courses</CardTitle>
        <Button size="sm" onClick={handleAddCourse}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 mb-4">
          <Input
            placeholder="Course Name"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          />
          <select
            className="border border-gray-300 rounded p-2"
            value={newCourse.deptId}
            onChange={(e) => setNewCourse({ ...newCourse, deptId: parseInt(e.target.value) })}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>
          <select
            className="border border-gray-300 rounded p-2"
            value={newCourse.teacherId}
            onChange={(e) => setNewCourse({ ...newCourse, teacherId: parseInt(e.target.value) })}
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>{teacher.firstName} {teacher.lastName}</option>
            ))}
          </select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.name}</TableCell>
                <TableCell>{course.departmentName}</TableCell>
                <TableCell>{course.teacherName}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteCourse(course.id)} style={{backgroundColor:'red'}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
