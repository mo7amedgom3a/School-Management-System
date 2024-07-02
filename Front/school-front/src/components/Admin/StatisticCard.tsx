"use client"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
export function StatisticCard() {
  // State to store the statistics data
  const [statistics, setStatistics] = useState({
    totalStudents: null,
    totalTeachers: null,
    totalCourses: null,
    totalDepartments: null,
    totalSalaryPaid: null,
    averageSalary: null,
    averageStudentMarks: null,
    totalHomeworkAssignments: null
  })

  // State to track loading status
  const [loading, setLoading] = useState(true)

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:5143/api/Admin/statistics")
      .then(response => response.json())
      .then(data => {
        setStatistics(data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching statistics:", error)
        setLoading(false)
      })
  }, [])


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <div className="text-2xl font-bold">{statistics.totalStudents}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Total number of students</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
          <div className="text-2xl font-bold">{statistics.totalTeachers}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Total number of teachers</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
          <div className="text-2xl font-bold">{statistics.totalCourses}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Total number of courses</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
          <div className="text-2xl font-bold">{statistics.totalDepartments}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Total number of departments</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Salary Paid</CardTitle>
          <div className="text-2xl font-bold">${statistics.totalSalaryPaid}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Total salary paid</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
          <div className="text-2xl font-bold">${statistics.averageSalary}</div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Average salary</p>
        </CardContent>
      </Card>
    </div>
  )
}
