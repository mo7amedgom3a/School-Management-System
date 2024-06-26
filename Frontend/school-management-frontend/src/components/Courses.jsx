// src/components/Courses.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";
import { Button } from "../components/ui/Button";

const Courses = () => {
  // Sample data
  const courses = [
    { name: "Introduction to Computer Science", grade: "A", attendance: "95%" },
    { name: "Calculus I", grade: "B+", attendance: "88%" },
    { name: "English Composition", grade: "A-", attendance: "92%" },
    { name: "Introduction to Psychology", grade: "B", attendance: "90%" },
  ];

  return (
    <section id="courses" className="mt-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Current Courses</CardTitle>
          <Button>Add Course</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.grade}</TableCell>
                  <TableCell>{course.attendance}</TableCell>
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

export default Courses;
