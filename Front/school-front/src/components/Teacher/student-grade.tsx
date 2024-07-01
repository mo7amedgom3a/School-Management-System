import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Grade {
  courseName: string;
  studentName: string;
  grade: number;
}
interface StudentGradeProps {
  grades: Grade[];
}
export function StudentGrade({grades}: StudentGradeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grades</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade, index) => (
              <TableRow key={index}>
                <TableCell>{grade.courseName}</TableCell>
                <TableCell>{grade.studentName}</TableCell>
                <TableCell>{grade.grade}</TableCell>
                <TableCell>
                  <Button>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
