// src/components/HomeworkCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function HomeworkCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Homework</CardTitle>
        <CardDescription>Your current homework assignments</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignment</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">CS101 Problem Set 3</TableCell>
              <TableCell>2023-06-30</TableCell>
              <TableCell>
                <Badge variant="outline">Completed</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Calculus I Homework 4</TableCell>
              <TableCell>2023-07-07</TableCell>
              <TableCell>
                <Badge variant="outline">Incomplete</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">English Essay Draft</TableCell>
              <TableCell>2023-07-15</TableCell>
              <TableCell>
                <Badge variant="outline">Incomplete</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Psychology Reflection Paper</TableCell>
              <TableCell>2023-07-21</TableCell>
              <TableCell>
                <Badge variant="outline">Incomplete</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
