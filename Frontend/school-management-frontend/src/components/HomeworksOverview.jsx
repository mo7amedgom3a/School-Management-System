// src/components/HomeworksOverview.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";

const HomeworksOverview = () => {
  // Sample data for homeworks overview
  const homeworks = [
    { title: "Assignment 1", course: "Computer Science", dueDate: "2024-06-30" },
    { title: "Homework 2", course: "Calculus I", dueDate: "2024-07-05" },
    { title: "Essay 1", course: "English Composition", dueDate: "2024-07-10" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Homeworks Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {homeworks.map((homework, index) => (
              <TableRow key={index}>
                <TableCell>{homework.title}</TableCell>
                <TableCell>{homework.course}</TableCell>
                <TableCell>{homework.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HomeworksOverview;
