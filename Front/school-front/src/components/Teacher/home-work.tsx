// components/TeacherDashboard/HomeWork.js
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon, FilterIcon, MoveVerticalIcon } from "@/components/Teacher/icons";

interface Homework {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  courseId: number;
  teacherId: number;
  courseName: string;

}

interface HomeWorkProps {
  homeworks: Homework[];
  teacherId: number; 
  courses: Course[]; // Receiving the courses from Teacher component
}

interface Course {
  id: number;
  name: string;
  deptId: number;
}

export function HomeWork({ homeworks, teacherId, courses }: HomeWorkProps) {
  const [homeworkList, setHomeworkList] = useState(homeworks);
  const [newHomework, setNewHomework] = useState<Homework | null>(null); // For adding new homework
  const [editingHomeworkId, setEditingHomeworkId] = useState<number | null>(null); // For editing homework

  // Function to handle adding a new homework
  const handleAddHomework = () => {
    setNewHomework({
      id: 0,
      title: "",
      description: "",
      dueDate: "",
      teacherId,
      courseId: 0,
      courseName: ""
    });
  };

  // Function to handle saving a new homework
  const handleSaveNewHomework = async () => {
    if (newHomework) {
      try {
        const response = await fetch("http://localhost:5143/api/Homework", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newHomework)
        });

        if (response.ok) {
          const savedHomework = await response.json();
          setHomeworkList([...homeworkList, savedHomework]);
          setNewHomework(null);
        } else {
          console.error("Error adding homework:", await response.text());
        }
      } catch (error) {
        console.error("Error adding homework:", error);
      }
    }
  };

  // Function to handle editing a homework
  const handleEditHomework = (homeworkId: number) => {
    setEditingHomeworkId(homeworkId);
  };

  // Function to handle saving an edited homework
  const handleSaveEditedHomework = async (homework: Homework) => {
    try {
      const response = await fetch(`http://localhost:5143/api/Homework/${homework.id}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(homework)
      });

      if (response.ok) {
        const updatedHomework = await response.json();
        setHomeworkList(homeworkList.map(h => h.id === homework.id ? updatedHomework : h));
        setEditingHomeworkId(null);
      } else {
        console.error("Error editing homework:", await response.text());
      }
    } catch (error) {
      console.error("Error editing homework:", error);
    }
  };

  // Function to handle deleting a homework
  const handleDeleteHomework = async (homeworkId: number) => {
    try {
      const response = await fetch(`http://localhost:5143/api/Homework/${homeworkId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      if (response.ok) {
        setHomeworkList(homeworkList.filter(h => h.id !== homeworkId));
      } else {
        console.error("Error deleting homework:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting homework:", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Homework Management</h1>
          <Button size="sm" onClick={handleAddHomework}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Homework
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Input type="search" placeholder="Search homeworks..." className="bg-muted rounded-md px-4 py-2 text-sm" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Due Date</DropdownMenuItem>
              <DropdownMenuItem>Subject</DropdownMenuItem>
              <DropdownMenuItem>Assigned To</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Homeworks</CardTitle>
            <CardDescription>View and manage all your assigned homeworks.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Render the form to add a new homework */}
                {newHomework && (
                  <TableRow key="new-homework">
                    <TableCell>
                      <select
                        value={newHomework.courseId}
                        onChange={(e) => setNewHomework({ ...newHomework, courseId: parseInt(e.target.value) })}
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={newHomework.title}
                        onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value })}
                        placeholder="Title"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={newHomework.description}
                        onChange={(e) => setNewHomework({ ...newHomework, description: e.target.value })}
                        placeholder="Description"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="datetime-local"
                        value={newHomework.dueDate}
                        onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
                        placeholder="Due Date"
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" onClick={handleSaveNewHomework}>Save</Button>
                    </TableCell>
                  </TableRow>
                )}

                {/* Render the existing homeworks */}
                {homeworkList.map((homework) => (
                  <TableRow key={homework.id}>
                    <TableCell>
                      {editingHomeworkId === homework.id ? (
                        <select
                          value={homework.courseId}
                          onChange={(e) => setHomeworkList(homeworkList.map(h => h.id === homework.id ? { ...h, courseId: parseInt(e.target.value) } : h))}
                        >
                          <option value="">Select Course</option>
                          {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        homework.courseName
                      )}
                    </TableCell>
                    <TableCell>
                      {editingHomeworkId === homework.id ? (
                        <Input
                          type="text"
                          value={homework.title}
                          onChange={(e) => setHomeworkList(homeworkList.map(h => h.id === homework.id ? { ...h, title: e.target.value } : h))}
                        />
                      ) : (
                        <div className="font-medium">{homework.title}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingHomeworkId === homework.id ? (
                        <Input
                          type="text"
                          value={homework.description}
                          onChange={(e) => setHomeworkList(homeworkList.map(h => h.id === homework.id ? { ...h, description: e.target.value } : h))}
                        />
                      ) : (
                        homework.description
                      )}
                    </TableCell>
                    <TableCell>
                      {editingHomeworkId === homework.id ? (
                        <Input
                          type="datetime-local"
                          value={homework.dueDate}
                          onChange={(e) => setHomeworkList(homeworkList.map(h => h.id === homework.id ? { ...h, dueDate: e.target.value } : h))}
                        />
                      ) : (
                        homework.dueDate
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="w-4 h-4" />
                            <span className="sr-only">More</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {editingHomeworkId === homework.id ? (
                            <DropdownMenuItem onClick={() => handleSaveEditedHomework(homework)} style={{color: 'green'}}>
                              Save
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem onClick={() => handleEditHomework(homework.id)} style={{color: 'blue'}}>
                              Edit
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem onClick={() => handleDeleteHomework(homework.id)} style={{color: 'red'}}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
