// src/components/CoursesCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export function CoursesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses</CardTitle>
        <CardDescription>Your current courses</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Professor</TableHead>
              <TableHead>Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Introduction to Computer Science</TableCell>
              <TableCell>Dr. Jane Doe</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Calculus I</TableCell>
              <TableCell>Dr. John Smith</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">English Composition</TableCell>
              <TableCell>Ms. Sarah Lee</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Introduction to Psychology</TableCell>
              <TableCell>Dr. Michael Brown</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
