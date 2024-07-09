"use client";

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SchoolIcon } from "lucide-react";
import Alert from '@mui/material/Alert';


export function LoginComponent() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5143/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
  
        // Save the token to local storage or a secure place
        localStorage.setItem("authToken", token);
  
        // Decode the token to get the role and username
        const decodedToken = jwtDecode(token);
  
        const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        const userNameFromToken = decodedToken["sub"];
  
        if (userRole === "Student") {
          // Fetch the student ID
          const studentResponse = await fetch(`http://localhost:5143/api/Student/student/${userNameFromToken}`);
          if (studentResponse.ok) {
            const studentId = await studentResponse.json();
            console.log(studentId);
            // Redirect to the StudentDashboard with student ID
          window.location.href = `/StudentDashboard/${studentId}`;
          } else {
            setErrorMessage("Failed to retrieve student details.");
          }
        } else if (userRole === "Teacher") {
          // Fetch the teacher ID
          const teacherResponse = await fetch(`http://localhost:5143/api/Teacher/teacher/${userNameFromToken}`);
          if (teacherResponse.ok) {
            const teacherId = await teacherResponse.json();
  
            // Redirect to the TeacherDashboard with teacher ID
            window.location.href = `/TeacherDashboard/${teacherId}`;
          } else {
            setErrorMessage("Failed to retrieve teacher details.");
          }
        } else if (userRole === "Admin") {
          // Redirect to the AdminDashboard
          window.location.href = "/AdminDashboard";
        }
      } else {
        setErrorMessage("Unauthorized: Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  

  return (
    <>
       <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <SchoolIcon className="w-16 h-16 text-primary" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            School Management System
          </h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sign in to your account</CardTitle>
            <CardDescription>
              Enter your username and password below to access the school management system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {errorMessage && (
              <Alert severity="error">
                {errorMessage}
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleLogin}>
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </>
  );
}
