// src/components/ExamsCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export function ExamsCard() {
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
              <TableHead>Exam</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Computer Science Midterm</TableCell>
              <TableCell>2023-07-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Calculus I Final</TableCell>
              <TableCell>2023-07-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">English Composition Essay</TableCell>
              <TableCell>2023-07-20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Psychology Final</TableCell>
              <TableCell>2023-07-30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
