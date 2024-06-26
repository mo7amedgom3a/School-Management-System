// src/components/Overview.jsx

import OverviewCard from "../components/OverviewCard";

import CoursesOverview from "../components/CoursesOverview";
import HomeworksOverview from "../components/HomeworksOverview";
import AssignmentsOverview from "../components/AssignmentsOverview";


const Overview = () => {
  return (
    <section id="overview" >
      <div className="space-y-8">
        <CoursesOverview />
        <HomeworksOverview />
        <AssignmentsOverview />
      </div>
    </section>
  );
};

export default Overview;
