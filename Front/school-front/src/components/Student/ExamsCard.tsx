// src/components/ExamsCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface ExamsCardProps {
  courseExams: {
    name: string;
    status: string;
    maxMark: number;
    date: string;
    courseName: string;
  }[];
}
export function ExamsCard({ courseExams }: ExamsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exams</CardTitle>
        <CardDescription>Your upcoming exams</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Exam</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Max Mark</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courseExams.map((exam) => (
              <TableRow key={exam.name}>
                <TableCell>{exam.courseName}</TableCell>
                <TableCell>{exam.name}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.maxMark}</TableCell>
                <TableCell>{exam.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
