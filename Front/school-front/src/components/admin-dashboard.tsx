"use client"
import { Header } from "@/components/Admin/Header"
import { StatisticCard } from "@/components/Admin/StatisticCard"
import { StudentList } from "@/components/Admin/StudentList"
import { TeacherList } from "@/components/Admin/TeacherList"
import { CourseList } from "@/components/Admin/CourseList"
import { DepartmentList } from "@/components/Admin/DepartmentList"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

export default function AdminDashboard() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token) as any;
      setRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
    }
  }, []);
  if (role !== "Admin") {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <Card>
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You do not have permission to access this page.</p>
              <Button onClick={() => window.location.href = "/"}>Go to Home</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  else{
    return (
      <div>
        <Header />
  
          <StatisticCard />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <StudentList />
          <TeacherList />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CourseList />
          <DepartmentList />
        </div>
      </div>
    )
  }
  
}
