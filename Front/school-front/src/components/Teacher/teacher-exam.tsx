import React, { useState } from "react";
import axios from "axios";
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
    courseId:0,
    teacherId: teacherId,
    courseName: "",
  });

  const handleAddExam = () => {
    setIsAdding(true);
  };

  const handleSaveNewExam = async () => {
    try {
      // Send the POST request without the 'id' field
      const { id, ...examToCreate } = newExam;
      const response = await axios.post("http://localhost:5143/api/Exam", examToCreate);
      setExams([...exams, response.data]);
      setNewExam({
        name: "",
        status: "",
        maxMark: 0,
        date: "",
        time: "",
        courseId:0,
        teacherId : teacherId,
        courseName: "",
      });
      setIsAdding(false);
    } catch (error) {
      console.error("Failed to add exam", error);
    }
  };

  const handleEditExam = (examId: number) => {
    setIsEditing(examId);
  };

  const handleSaveEditExam = async (examId: number) => {
    const updatedExam = exams.find((exam) => exam.id === examId);
    if (updatedExam) {
      try {
        await axios.put(`http://localhost:5143/api/Exam/${examId}`, updatedExam);
        setIsEditing(null);
      } catch (error) {
        console.error("Failed to update exam", error);
      }
    }
  };

  const handleDeleteExam = async (examId: number) => {
    try {
      await axios.delete(`http://localhost:5143/api/Exam/${examId}`);
      setExams(exams.filter((exam) => exam.id !== examId));
    } catch (error) {
      console.error("Failed to delete exam", error);
    }
  };

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
                      <Input 
                        type="hidden"
                        name="teacherId"
                        value={teacherId}
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
                          <DropdownMenuItem onClick={() => handleEditExam(exam.id)} >Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteExam(exam.id)} >Delete</DropdownMenuItem>
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
                  <Input
                    type="hidden"
                    name="teacherId"
                    value={teacherId}
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
