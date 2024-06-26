// src/components/Assignments.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";
import { Button } from "../components/ui/Button";

const Assignments = () => {
  // Sample data
  const assignments = [
    { name: "Project Proposal", course: "Introduction to Computer Science", dueDate: "2024-07-01", status: "Completed" },
    { name: "Midterm Exam", course: "Calculus I", dueDate: "2024-07-10", status: "Pending" },
    { name: "Essay Draft", course: "English Composition", dueDate: "2024-07-05", status: "In Progress" },
    { name: "Research Paper", course: "Introduction to Psychology", dueDate: "2024-07-15", status: "Not Started" },
  ];

  return (
    <section id="assignments" className="mt-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Assignments</CardTitle>
          <Button>Add Assignment</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment, index) => (
                <TableRow key={index}>
                  <TableCell>{assignment.name}</TableCell>
                  <TableCell>{assignment.course}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>{assignment.status}</TableCell>
                  <TableCell>
                    <Button variant="ghost">Edit</Button>
                    <Button variant="ghost">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default Assignments;
