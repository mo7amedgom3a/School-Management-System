import React, { useState } from "react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "../Teacher/icons";

interface Exam {
  id: number;
  name: string;
  courseId: number;
  status: string;
  courseName: string;
  maxMark: number;
  date: string;
  time: string;
  teacherId: number;
}

interface Course {
  id: number;
  name: string;
  deptId: number;
}

interface TeacherExamProps {
  exams: Exam[];
  courses: Course[];
  teacherId: number;
}

export function TeacherExam({ exams: initialExams, courses: initialCourses, teacherId }: TeacherExamProps) {
  const [exams, setExams] = useState<Exam[]>(initialExams);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newExam, setNewExam] = useState<Partial<Omit<Exam, 'id'>>>({
    name: "",
    status: "",
    maxMark: 0,
    date: "",
    time: "",
    courseId: 0,
    teacherId: teacherId,
    courseName: "",
  });

  // Handle the addition of a new exam
  const handleAddExam = () => {
    setIsAdding(true);
  };

  // Handle the save of a new exam
  const handleSaveNewExam = async () => {
    try {
      const response = await fetch("http://localhost:5143/api/Exam", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          name: newExam.name,
          status: newExam.status,
          maxMark: newExam.maxMark,
          date: newExam.date,
          time: newExam.time,
          courseId: newExam.courseId,
          teacherId: newExam.teacherId,
        }),
      });

      if (response.ok) {
        const savedExam = await response.json();
        setExams([...exams, savedExam]);
        setNewExam({
          name: "",
          status: "",
          maxMark: 0,
          date: "",
          time: "",
          courseId: 0,
          teacherId: teacherId,
          courseName: "",
        });
        setIsAdding(false);
      } else {
        console.error("Failed to add exam:", await response.text());
      }
    } catch (error) {
      console.error("Failed to add exam:", error);
    }
  };

  // Handle the edit of an existing exam
  const handleEditExam = (examId: number) => {
    setIsEditing(examId);
  };

  // Handle the save of an edited exam
  const handleSaveEditExam = async (examId: number) => {
    const updatedExam = exams.find((exam) => exam.id === examId);
    if (updatedExam) {
      try {
        const response = await fetch(`http://localhost:5143/api/Exam/${examId}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: JSON.stringify(updatedExam),
        });

        if (response.ok) {
          const updatedExamResponse = await response.json();
          setExams(exams.map((exam) => (exam.id === examId ? updatedExamResponse : exam)));
          setIsEditing(null);
        } else {
          console.error("Failed to update exam:", await response.text());
        }
      } catch (error) {
        console.error("Failed to update exam:", error);
      }
    }
  };

  // Handle the deletion of an exam
  const handleDeleteExam = async (examId: number) => {
    try {
      const response = await fetch(`http://localhost:5143/api/Exam/${examId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (response.ok) {
        setExams(exams.filter((exam) => exam.id !== examId));
      } else {
        console.error("Failed to delete exam:", await response.text());
      }
    } catch (error) {
      console.error("Failed to delete exam:", error);
    }
  };

  // Handle input change for both new and existing exams
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, examId?: number) => {
    const { name, value } = e.target;

    if (examId === undefined) {
      setNewExam({ ...newExam, [name]: value });
      if (name === "courseId") {
        const selectedCourse = initialCourses.find(course => course.id === parseInt(value));
        if (selectedCourse) {
          setNewExam({ ...newExam, courseId: selectedCourse.id, courseName: selectedCourse.name });
        }
      }
    } else {
      setExams(exams.map((exam) => {
        if (exam.id === examId) {
          if (name === "courseId") {
            const selectedCourse = initialCourses.find(course => course.id === parseInt(value));
            if (selectedCourse) {
              return { ...exam, courseId: selectedCourse.id, courseName: selectedCourse.name };
            }
          }
          return { ...exam, [name]: value };
        }
        return exam;
      }));
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Exam Management</h1>
          <Button size="sm" onClick={handleAddExam}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Exam
          </Button>
        </div>
        <CardDescription>View and manage exams.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Max Mark</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                {isEditing === exam.id ? (
                  <>
                    <TableCell>
                      <select
                        name="courseId"
                        value={exam.courseId}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      >
                        <option value="">Select a course</option>
                        {initialCourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        name="name"
                        value={exam.name}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        name="status"
                        value={exam.status}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="date"
                        name="date"
                        value={exam.date}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        name="time"
                        value={exam.time}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        name="maxMark"
                        value={exam.maxMark}
                        onChange={(e) => handleInputChange(e, exam.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={() => handleSaveEditExam(exam.id)}>
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{exam.courseName}</TableCell>
                    <TableCell>{exam.name}</TableCell>
                    <TableCell>{exam.status}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleEditExam(exam.id)} style={{color: 'blue'}}>Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteExam(exam.id)} style={{color: 'red'}}>Delete</DropdownMenuItem>
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
                    value={newExam.courseId}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <option value="">Select a course</option>
                    {initialCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    name="name"
                    value={newExam.name}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    name="status"
                    value={newExam.status}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="date"
                    name="date"
                    value={newExam.date}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    name="time"
                    value={newExam.time}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    name="maxMark"
                    value={newExam.maxMark}
                    onChange={(e) => handleInputChange(e)}
                  />
                </TableCell>
                <TableCell>
                  <Button size="sm" onClick={handleSaveNewExam}>
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
