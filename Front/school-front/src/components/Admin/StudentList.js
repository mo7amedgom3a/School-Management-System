"use client"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { PlusIcon, TrashIcon } from "../Teacher/icons" // Assuming icons are available or can be implemented similarly.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function StudentList() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    // Fetch students data
    fetch("http://localhost:5143/api/Student")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?")
    if (confirmDelete) {
      setStudents(students.filter((student) => student.id !== id))
    }
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Number of Courses</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.firstName} {student.lastName}</TableCell>
                  <TableCell>{student.departmentName}</TableCell>
                  <TableCell>{student.numberOfCourses}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteStudent(student.id)} style={{backgroundColor: 'red' }}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
