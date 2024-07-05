// src/components/ProgressCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
interface courseGrades {
  courseName: string;
  studentMark: number;
}
interface ProgressCardProps {
  CourseGrades: courseGrades[];
  totalGrade: number;

}
export function ProgressCard({CourseGrades, totalGrade}: ProgressCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress</CardTitle>
        <CardDescription>Your overall academic progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Total Grade:</strong> {totalGrade}
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
   
              <TableHead>Student Mark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CourseGrades.map((courseGrade) => (
              <TableRow key={courseGrade.courseName}>
                <TableCell>{courseGrade.courseName}</TableCell>
         
                <TableCell>{courseGrade.studentMark}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
