"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check'; 
import { redirect } from "next/navigation";

export function TeacherComponent() {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    specialization: "",
    deptId: 0,
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

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

    // Perform validation if necessary
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

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      setRegistrationSuccess(true);
      setErrorMessage("");

      // Redirect to login page after a delay
      setTimeout(() => {
        redirectTo("/login");
      }, 2000); // Redirect after 2 seconds

    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed. Please try again.");
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary">Teacher Registration</h2>
          <p className="mt-2 text-muted-foreground">Enroll in our school management system.</p>
        </div>
        {registrationSuccess && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Registration successful! Redirecting to login...
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error">
            {errorMessage}
          </Alert>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
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
            <div className="sm:col-span-2">
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
            <div className="sm:col-span-2">
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
            <div className="sm:col-span-2">
              <Label htmlFor="specialization">Specialization</Label>
              <select
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="">Select your specialization</option>
                <option value="mathematics">Mathematics</option>
                <option value="english">English</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="art">Art</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="deptId">Department</Label>
              <select
                id="deptId"
                value={formData.deptId}
                onChange={handleDepartmentChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="">Select your department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
