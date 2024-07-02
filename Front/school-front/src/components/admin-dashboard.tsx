"use client"
import { Header } from "@/components/Admin/Header"
import { StatisticCard } from "@/components/Admin/StatisticCard"
import { StudentList } from "@/components/Admin/StudentList"
import { TeacherList } from "@/components/Admin/TeacherList"
import { CourseList } from "@/components/Admin/CourseList.tsx"
import { DepartmentList } from "@/components/Admin/DepartmentList"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AdminDashboard() {

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
