// src/components/AssignmentsOverview.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";

const AssignmentsOverview = () => {
  // Sample data for assignments overview
  const assignments = [
    { name: "Project Proposal", course: "Computer Science", dueDate: "2024-07-01", status: "Completed" },
    { name: "Midterm Exam", course: "Calculus I", dueDate: "2024-07-10", status: "Pending" },
    { name: "Essay Draft", course: "English Composition", dueDate: "2024-07-05", status: "In Progress" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Assignments Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignment</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((assignment, index) => (
              <TableRow key={index}>
                <TableCell>{assignment.name}</TableCell>
                <TableCell>{assignment.course}</TableCell>
                <TableCell>{assignment.dueDate}</TableCell>
                <TableCell>{assignment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AssignmentsOverview;
