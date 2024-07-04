"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Alert from '@mui/material/Alert'; // Import Alert from Material-UI or your preferred library
import CheckIcon from '@mui/icons-material/Check'; // Import the CheckIcon for the success alert

export function TeacherComponent() {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    address: "",
    imgUrl: "",
    specialization: "",
    deptId: 0,
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


 
  useEffect(() => {
    // Fetch the list of departments
    fetch("http://localhost:5143/api/Department")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error("Error fetching departments:", err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleDepartmentChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      deptId: parseInt(e.target.value),
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5143/api/Auth/register/Teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        setRegistrationSuccess(true);
        setErrorMessage("");

      } else {
        const data = await response.json();
        console.error("Registration failed:", data);
        setErrorMessage(`Registration failed. Please try again. Status code: ${response.status}`);
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed. Please try again.");
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register as a Teacher</h1>
        <p className="text-muted-foreground">
          Create an account to join our teaching staff.
        </p>
      </div>
      {registrationSuccess && (
        <Alert severity="success">
          Registration successful! Redirecting to login...
          <CheckIcon />
        </Alert>
      )}
       {registrationSuccess && window.setTimeout(() => {
        window.location.href = "/Login";
      }, 4000
      )}
      {errorMessage && (
        <Alert severity="error">
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="john.doe"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Date of Birth</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imgUrl">Profile Image URL</Label>
              <Input
                id="img"
                type="text"
                placeholder="img.png"
                value={formData.imgUrl}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <select
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="">Select your specialization</option>
                <option value="mathematics">Mathematics</option>
                <option value="english">English</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="CS">Computer Science</option>
                <option value="art">Art</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deptId">Department</Label>
              <select
                id="deptId"
                value={formData.deptId}
                onChange={handleDepartmentChange}
                required
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="">Select your department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </CardFooter>
        </Card>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/Login" className="underline" prefetch={false}>
          Login
        </Link>
      </div>
    </div>
  );
}
