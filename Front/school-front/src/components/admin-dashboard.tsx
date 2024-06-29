'use client'
import React, { useState } from "react";
import Header from './Admin/Header';
import Sidebar from "./Admin/Sidebar";
import StatsCards from "./Admin/StatsCards";
import AdminControl from "./Admin/AdminControl";
import Dates from "./Admin/Dates";
import Information from "./Admin/information";
import TeacherList from "./Admin/teacher-list";  // Import StudentList component



export function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to render the active component based on the current state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "students":
        return <TeacherList />;
      case "teachers":
        return <TeacherList />;
      case "dashboard":
      default:
        return (
          <>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AdminControl />
              <Dates />
              <Information />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">

      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <StatsCards />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
