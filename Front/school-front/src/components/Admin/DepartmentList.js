"use client"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { PlusIcon, TrashIcon } from "../Teacher/icons" // Assuming icons are available or can be implemented similarly.

export function DepartmentList() {
  const [departments, setDepartments] = useState([])
  const [newDepartment, setNewDepartment] = useState("")

  useEffect(() => {
    // Fetch departments data
    fetch("http://localhost:5143/api/Department",{
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      })
    })
      .then(res => res.json())
      .then(data => setDepartments(data))
  }, [])

  const handleAddDepartment = () => {
    // Add department
    fetch("http://localhost:5143/api/Department", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        name: newDepartment,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // Update departments list
        setDepartments([...departments, data])
        setNewDepartment("")
      })
  }

  const handleDeleteDepartment = (id) => {
    const message = window.confirm("Are you sure you want to delete this department?")
    if (message) {
      // Delete department
      fetch(`http://localhost:5143/api/Department/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
        .then(() => {
          // Update departments list
          setDepartments(departments.filter(department => department.id !== id))
        })
    }
  }

  return (
   <div className="flex flex-col">
     <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Departments</CardTitle>
        <Button size="sm" onClick={handleAddDepartment}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Department
        </Button>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Department Name"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
        />
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
                  <Button onClick={() => handleDeleteDepartment(department.id)} style={{backgroundColor:'red'}}>  
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
