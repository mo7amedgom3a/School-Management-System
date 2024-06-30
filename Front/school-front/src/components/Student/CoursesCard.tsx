import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface CourseTeachers {
  teacherName: string;
  courseName: string;
  courseId: number;

}
interface CoursesCardProps {
  courseTeachers: CourseTeachers[];
}


export function CoursesCard({ courseTeachers }: CoursesCardProps) {
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
              <TableHead>Course-Id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courseTeachers.map((courseTeacher) => (
              <TableRow key={courseTeacher.courseId}>
                <TableCell>{courseTeacher.courseName}</TableCell>
                <TableCell>{courseTeacher.teacherName}</TableCell>
                <TableCell>{courseTeacher.courseId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
