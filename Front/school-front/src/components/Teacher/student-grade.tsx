import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "./icons";

interface Grade {
  courseId: number;
  courseName: string;
  studentId: number;
  studentName: string;
  grade: number;
}

interface Course {
  id: number;
  name: string;
}

interface Student {
  studentId: number;
  studentName: string;
  courseId: number;
  courseName: string;
  studentMark: number;
}

interface StudentGradeProps {
  grades: Grade[];
  courses: Course[];
  teacherId: number;
}

export function StudentGrade({ grades: initialGrades, courses, teacherId }: StudentGradeProps) {
  const [grades, setGrades] = useState<Grade[]>(initialGrades);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [newGrade, setNewGrade] = useState<Partial<Grade>>({
    studentId: 0,
    courseId: 0,
    grade: 0,
  });

  useEffect(() => {
    if (selectedCourseId !== null) {
      const fetchStudents = async () => {
        try {
          const response = await fetch(`http://localhost:5143/api/StudentCourse/${selectedCourseId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
          });
          const data = await response.json();
          setStudents(data);
        } catch (error) {
          console.error("Failed to fetch students", error);
        }
      };
      fetchStudents();
    }
  }, [selectedCourseId]);

  const handleAddGrade = () => {
    setIsAdding(true);
  };

  const handleSaveNewGrade = async () => {
    try {
      const response = await fetch("http://localhost:5143/api/StudentCourse", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          studentId: newGrade.studentId,
          courseId: selectedCourseId,
          studentMark: newGrade.grade,
        })
      });

      const data = await response.json();

      const newGradeEntry = {
        studentId: newGrade.studentId!,
        courseId: selectedCourseId!,
        studentName: students.find(student => student.studentId === newGrade.studentId)?.studentName || '',
        courseName: courses.find(course => course.id === selectedCourseId)?.name || '',
        grade: newGrade.grade!,
      };
      setGrades([...grades, newGradeEntry]);
      setNewGrade({ studentId: 0, courseId: 0, grade: 0 });
      setIsAdding(false);
      setSelectedCourseId(null);
    } catch (error) {
      console.error("Failed to add grade", error);
    }
  };

  const handleEditGrade = (studentId: number, courseId: number) => {
    setIsEditing(studentId);
    setSelectedCourseId(courseId);
  };

  const handleSaveEditGrade = async (studentId: number, courseId: number) => {
    const updatedGrade = grades.find((grade) => grade.studentId === studentId && grade.courseId === courseId);
    if (updatedGrade) {
      try {
        await fetch(`http://localhost:5143/api/StudentCourse`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: JSON.stringify({
            studentId: updatedGrade.studentId,
            courseId: updatedGrade.courseId,
            studentMark: updatedGrade.grade,
          })
        });
        setIsEditing(null);
      } catch (error) {
        console.error("Failed to update grade", error);
      }
    }
  };

  const handleDeleteGrade = async (studentId: number, courseId: number) => {
    try {
      await fetch(`http://localhost:5143/api/StudentCourse/${studentId}/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      setGrades(grades.filter((grade) => !(grade.studentId === studentId && grade.courseId === courseId)));
    } catch (error) {
      console.error("Failed to delete grade", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, studentId?: number, courseId?: number) => {
    const { name, value } = e.target;
    if (studentId === undefined && courseId === undefined) {
      setNewGrade({ ...newGrade, [name]: value });
    } else {
      setGrades(grades.map((grade) => {
        if (grade.studentId === studentId && grade.courseId === courseId) {
          return { ...grade, [name]: value };
        }
        return grade;
      }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Grade Management</h1>
          <Button size="sm" onClick={handleAddGrade}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Grade
          </Button>
        </div>
        <CardDescription>Manage student grades by course.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade, index) => (
              <TableRow key={index}>
                {isEditing === grade.studentId && selectedCourseId === grade.courseId ? (
                  <>
                    <TableCell>
                      <select
                        name="courseId"
                        value={grade.courseId}
                        onChange={(e) => handleInputChange(e, grade.studentId, grade.courseId)}
                        disabled
                      >
                        <option value={grade.courseId}>{grade.courseName}</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <select
                        name="studentId"
                        value={grade.studentId}
                        onChange={(e) => handleInputChange(e, grade.studentId, grade.courseId)}
                        disabled
                      >
                        <option value={grade.studentId}>{grade.studentName}</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        name="grade"
                        value={grade.grade}
                        onChange={(e) => handleInputChange(e, grade.studentId, grade.courseId)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={() => handleSaveEditGrade(grade.studentId, grade.courseId)}>
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{grade.courseName}</TableCell>
                    <TableCell>{grade.studentName}</TableCell>
                    <TableCell>{grade.grade}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button size="sm">Actions</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEditGrade(grade.studentId, grade.courseId)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteGrade(grade.studentId, grade.courseId)}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
            {isAdding && (
              <TableRow>
                <TableCell>
                  <select
                    name="courseId"
                    value={selectedCourseId ?? ""}
                    onChange={(e) => setSelectedCourseId(parseInt(e.target.value))}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <select
                    name="studentId"
                    value={newGrade.studentId}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <option value="">Select a student</option>
                    {students.map((student) => (
                      <option key={student.studentId} value={student.studentId}>
                        {student.studentName}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    name="grade"
                    value={newGrade.grade}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Button size="sm" onClick={handleSaveNewGrade}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
