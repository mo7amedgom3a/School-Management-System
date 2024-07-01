// components/TeacherDashboard/HomeWork.js
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon, FilterIcon, MoveVerticalIcon } from "@/components/Teacher/icons";
import axios from 'axios';


interface Homework {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  courseId: number;
  teacherId: number;
  courseName: string;
  fileUrl: string;
}

interface HomeWorkProps {
  homeworks: Homework[];
  teacherId: number; 
  courseId: number;
}

export function HomeWork({ homeworks, teacherId , courseId}: HomeWorkProps) {
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
      courseId,
      courseName: "",
      fileUrl: ""
    });
  };

  // Function to handle saving a new homework
  const handleSaveNewHomework = async () => {
    if (newHomework) {
      try {
        const response = await axios.post("http://localhost:5143/api/Homework", newHomework);
        setHomeworkList([...homeworkList, response.data]);
        setNewHomework(null);
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
      const response = await axios.put(`http://localhost:5143/api/Homework/${homework.id}`, homework);
      setHomeworkList(homeworkList.map(h => h.id === homework.id ? response.data : h));
      setEditingHomeworkId(null);
    } catch (error) {
      console.error("Error editing homework:", error);
    }
  };

  // Function to handle deleting a homework
  const handleDeleteHomework = async (homeworkId: number) => {
    try {
      await axios.delete(`http://localhost:5143/api/Homework/${homeworkId}`);
      setHomeworkList(homeworkList.filter(h => h.id !== homeworkId));
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
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Render the new homework row if adding */}
                {newHomework && (
                  <TableRow key="new-homework">
                    <TableCell>
                      <Input
                        type="text"
                        value={newHomework.title}
                        onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value})}
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
                      <input type="hidden" value={courseId = homework.courseId} />
                      <input type="hidden" value={teacherId} />
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
