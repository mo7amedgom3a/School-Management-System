// src/components/DashboardLayout.jsx

import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardContent from "../components/DashboardContent";
import OverviewCard  from "./OverviewCard";
import { GaugeIcon, BookIcon, PercentIcon, CalendarIcon } from "../components/Icons"; // Import icons from a shared icons file

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col w-full min-h-screen bg-background space-y-8">
      <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <OverviewCard title="Current GPA" icon={GaugeIcon} value="3.8" subtitle="Cumulative GPA" />
      <OverviewCard title="Credits Earned" icon={BookIcon} value="90" subtitle="Out of 120 required" />
      <OverviewCard title="Progress to Graduation" icon={PercentIcon} value="75%" subtitle="Completed" />
      <OverviewCard title="Attendance" icon={CalendarIcon} value="92%" subtitle="This semester" />
      </div>
      <main className="flex-1 p-4 md:p-10 space-y-8">
        <DashboardContent activeTab={activeTab} />
      </main>
    </div>
  );
};

export default DashboardLayout;
