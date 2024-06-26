// src/components/DashboardHeader.jsx

import { Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const DashboardHeader = ({ activeTab, setActiveTab }) => {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <BookIcon className="w-6 h-6" />
          <span className="sr-only">Student Dashboard</span>
        </Link>
        <button className={`font-bold ${activeTab === "overview" ? "text-primary" : ""}`} onClick={() => setActiveTab("overview")}>
          Overview
        </button>
        <button className={`${activeTab === "courses" ? "text-primary" : "text-muted-foreground"}`} onClick={() => setActiveTab("courses")}>
          Courses
        </button>
        <button className={`${activeTab === "assignments" ? "text-primary" : "text-muted-foreground"}`} onClick={() => setActiveTab("assignments")}>
          Assignments
        </button>
        <button className={`${activeTab === "resources" ? "text-primary" : "text-muted-foreground"}`} onClick={() => setActiveTab("resources")}>
          Resources
        </button>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
        </form>
        <Button variant="ghost" size="icon" className="rounded-full">
          <img src="student.png" width="32" height="32" className="rounded-full" alt="studentImage" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};

function BookIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default DashboardHeader;
