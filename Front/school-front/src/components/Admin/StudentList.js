import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Select from 'react-select';

const fetchWithAuth = async (url, options = {}) => {
  const headers = new Headers({
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    ...options.headers,
  });
  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return response.json();
};

export function StudentList() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchWithAuth("http://localhost:5143/api/Student"),
      fetchWithAuth("http://localhost:5143/api/Course")
    ]).then(([studentData, courseData]) => {
      setStudents(studentData);
      setCourses(courseData);
    }).catch(error => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      // You should call the API to delete the student from the backend
      fetch(`http://localhost:5143/api/Student/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        })
      }).then(res => {
        if (res.ok) {
          setStudents(students.filter((student) => student.id !== id));
          alert("Student deleted successfully!");
        } else {
          alert("Failed to delete the student.");
        }
      });
    }}

  const handleCourseSelection = (studentId, courseId) => {
    setSelectedCourses(prev => ({ ...prev, [studentId]: courseId }));
  };

  const handleAddCourse = async (studentId) => {
    const courseId = selectedCourses[studentId];
    if (!courseId) {
      alert("Please select a course to add.");
      return;
    }
    try {
      await fetchWithAuth("http://localhost:5143/api/StudentCourse", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, courseId })
      });
      alert("Course added successfully!");
      setStudents(prev => prev.map(student => student.id === studentId ? { ...student, numberOfCourses: student.numberOfCourses + 1 } : student));
    } catch (error) {
      alert(error.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Number of Courses</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>Add Course</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.firstName} {student.lastName}</TableCell>
                  <TableCell>{student.departmentName}</TableCell>
                  <TableCell>{student.numberOfCourses}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteStudent(student.id)} style={{ backgroundColor: 'red' }}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Select
                      options={courses.map(course => ({ value: course.id, label: course.name }))}
                      onChange={selectedOption => handleCourseSelection(student.id, selectedOption.value)}
                      placeholder="Select a course"
                    />
                    <Button onClick={() => handleAddCourse(student.id)} style={{ backgroundColor: 'green', marginTop: '10px' }}>
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}