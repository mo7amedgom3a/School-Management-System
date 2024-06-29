'use client'
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Sidebar } from "@/components/Teacher/Sidebar";
import { Header } from "@/components/Teacher/Header";
import { FilterButton } from "@/components/Teacher/FilterButton";
import { StudentsTable } from "@/components/Teacher/StudentTable";
import {HomeWork} from "@/components/Teacher/home-work"; // Import GradeList component
import {TeacherExam} from "@/components/Teacher/teacher-exam"; // Import TeacherExamList component
import {StudentGrade} from "@/components/Teacher/student-grade"; // Import StudentGradeList component

export function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("students"); // State to track active tab

  // Function to render the active component based on the current state
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "HomeWork":
        return <HomeWork />;
      case "exams":
        return <TeacherExam />;
      case "student-grades":
        return <StudentGrade />;
      case "students":
      default:
        return <StudentsTable />;
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">

      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header setActiveTab={setActiveTab} />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="HomeWork">HomeWorks</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="student-grades">Student Grades</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <FilterButton />
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <ImportIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add</span>
                </Button>
              </div>
            </div>
            {renderActiveComponent()} 
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function ImportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-4 w-4"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-4 w-4"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  )
}
