import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Define the Exam interface
interface Exam {
  id: number;
  name: string;
  maxMark: number;
  title: string;
  date: string;
  time: string;
}

// Define the props for the TeacherExam component
interface TeacherExamProps {
  exams: Exam[];
}

export function TeacherExam({ exams }: TeacherExamProps) {
  const handleEditExam = (examId: number) => {
    // Logic for editing an exam
    console.log("Edit Exam", examId);
  };

  const handleDeleteExam = (examId: number) => {
    // Logic for deleting an exam
    console.log("Delete Exam", examId);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Exams</CardTitle>
        <CardDescription>View and edit your students' exam results.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Max Score</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell>{exam.name}</TableCell>
                <TableCell>{exam.title}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.time}</TableCell>
                <TableCell>{exam.maxMark}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button>Actions</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEditExam(exam.id)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteExam(exam.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
}
