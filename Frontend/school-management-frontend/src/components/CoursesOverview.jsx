// src/components/CoursesOverview.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";

const CoursesOverview = () => {
  // Sample data for courses overview
  const courses = [
    { name: "Introduction to Computer Science", grade: "A", attendance: "95%" },
    { name: "Calculus I", grade: "B+", attendance: "88%" },
    { name: "English Composition", grade: "A-", attendance: "92%" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Courses Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.grade}</TableCell>
                <TableCell>{course.attendance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CoursesOverview;
