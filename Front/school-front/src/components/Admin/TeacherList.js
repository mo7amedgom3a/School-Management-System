"use client"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { PlusIcon, TrashIcon } from "../Teacher/icons"

export function TeacherList() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    // Fetch teachers data
    fetch("http://localhost:5143/api/Teacher", {
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      })
    })
      .then(res => res.json())
      .then(data => setTeachers(data))
  }, [])

  const handleDeleteTeacher = (id) => {
    const message = window.confirm("Are you sure you want to delete this teacher?")
    if (message) {
      // Delete teacher
      fetch(`http://localhost:5143/api/Teacher/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          // Update teachers list
          setTeachers(teachers.filter(teacher => teacher.id !== id))
        })
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle>Teacher List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>specialization</TableHead>
              <TableHead>Action</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell className="font-medium">{`${teacher.firstName} ${teacher.lastName}`}</TableCell>
                <TableCell>{teacher.specialization}</TableCell>
                <TableCell>
                  <Button  onClick={() => handleDeleteTeacher(teacher.id)} style={{backgroundColor:'red'}}>
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
