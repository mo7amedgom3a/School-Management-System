// components/TeacherDashboard/StudentsTable.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoveHorizontalIcon } from "./icons";

export function StudentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Students</CardTitle>
        <CardDescription>Manage your students, take attendance, and view their information.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Photo</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <StudentRow key={student.name} student={student} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const students = [
  {
    name: "Liam Johnson",
    grade: "A",
    email: "liam@example.com",
    phone: "(123) 456-7890",
    attendance: "Present",
    photo: "/placeholder.svg",
  },
  {
    name: "Olivia Smith",
    grade: "B+",
    email: "olivia@example.com",
    phone: "(987) 654-3210",
    attendance: "Absent",
    photo: "/placeholder.svg",
  },
];

function StudentRow({ student }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <img
          alt="Student photo"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={student.photo}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{student.name}</TableCell>
      <TableCell>{student.grade}</TableCell>
      <TableCell className="hidden md:table-cell">{student.email}</TableCell>
      <TableCell className="hidden md:table-cell">{student.phone}</TableCell>
      <TableCell>
        <Badge variant="outline">{student.attendance}</Badge>
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoveHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Mark Absent</DropdownMenuItem>
            <DropdownMenuItem>Mark Tardy</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
