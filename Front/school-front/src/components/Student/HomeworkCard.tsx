// src/components/HomeworkCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
interface homeworks{
  title: string;
  description: string;
  dueDate: string;
  courseName: string;
  status: string;
}
interface Homeworks {
  HomeWorks: homeworks[];
}
export function HomeworkCard({ HomeWorks }: Homeworks) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Homeworks</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>description</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {HomeWorks.map((homework, index) => (
              <TableRow key={index}>
                <TableCell>{homework.title}</TableCell>
                <TableCell>{homework.description}</TableCell>
                <TableCell>{homework.courseName}</TableCell>
                <TableCell>{homework.dueDate}</TableCell>
                <TableCell>
                  <Badge style={{ background: homework.status === "Completed" || homework.status === 'Submited'  || homework.status === 'Submitted'? "green" : "red" }}>
                    {homework.status === "Completed" || homework.status === "Done" || homework.status === 'Submited' ? "Completed" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
