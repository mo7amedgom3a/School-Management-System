// src/components/StudentRegistration.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";
import FormField from "../components/FormField";
import FormSelect from "../components/FormSelect";
import FormButton from "../components/FormButton";
import "../assets/css/login.css"


export default function StudentRegistration() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const departmentOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}th department`,
  }));

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center pp">
        <h1 className="text-3xl font-bold">Register for School</h1>
        <p className="text-muted-foreground">Create your account to manage your school activities.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormCard>
          <FormCard.Content className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                id="firstName"
                label="First Name"
                placeholder="John"
                value={student.firstName}
                onChange={handleChange}
                required
              />
              <FormField
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                value={student.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="m@example.com"
              value={student.email}
              onChange={handleChange}
              required
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              value={student.password}
              onChange={handleChange}
              required
            />
            <FormSelect
              id="department"
              label="department"
              value={student.department}
              onChange={handleChange}
              required
              options={departmentOptions}
            />
            <FormField
              id="phone"
              label="Phone Number"
              placeholder="(123) 456-7890"
              value={student.phone}
              onChange={handleChange}
              required
            />
            <FormField
              id="address"
              label="Address"
              placeholder="123 Main St, City, State"
              value={student.address}
              onChange={handleChange}
              required
            />
          </FormCard.Content>
          <FormCard.Footer>
            <Link to="/">
              <button type="button" className="w-full button">
                Register
              </button>
            </Link>
          </FormCard.Footer>
        </FormCard>
      </form>
    </div>
  );
}
