// components/TeacherDashboard/StudentsTable.js
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoveHorizontalIcon } from "./icons";
import axios from 'axios';

// Updated Student interface
interface Student {
  id: number;
  deptId: number;
  courseId: number;
  firstName: string;
  lastName: string;
  departmentName: string;
  courseName: string;
}
interface StudentTableProps {
  students: Student[];
}

// Function to handle attendance status update
const updateAttendance = async (studentId: number, courseId: number, status: boolean) => {
  try {
    const response = await fetch(`http://localhost:5143/api/Attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({ studentId, courseId, status , date: new Date()})
    });
    if (response.ok) {
      alert("Attendance updated successfully!");
    }
  } catch (error) {
    console.error("Error updating attendance:", error);
    // Handle error scenarios appropriately
  }
};

// StudentTable component with dynamic attendance functionality
export function StudentTable({ students }: StudentTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Students</CardTitle>
        <CardDescription>Manage your students and take attendance.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Take Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.departmentName}</TableCell>
                <TableCell>{student.courseName}</TableCell>
                
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="secondary" size="sm">
                        <MoveHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Attendance</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => updateAttendance(student.id, student.courseId, true)}>
                        <Button variant="outline" style={{ backgroundColor: 'green' }}>Present</Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => updateAttendance(student.id, student.courseId, false)}>
                        <Button variant="outline" style={{ backgroundColor: 'red' }}>Absent</Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
