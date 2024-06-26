// src/components/DashboardContent.jsx

import Overview from "../components/Overview";
import Courses from "../components/Courses";
import Assignments from "../components/Assignments";
import Resources from "../components/Resources";

const DashboardContent = ({ activeTab }) => {
  switch (activeTab) {
    case "courses":
      return <Courses />;
    case "assignments":
      return <Assignments />;
    case "resources":
      return <Resources />;
    default:
      return <Overview />;
  }
};

export default DashboardContent;
