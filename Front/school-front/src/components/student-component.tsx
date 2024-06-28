// src/components/StudentComponent.tsx
import { StudentDashboardHeader } from "@/components/Student/StudentDashboardHeader";
import { CoursesCard } from "@/components/Student/CoursesCard";
import { ProgressCard } from "@/components/Student/ProgressCard";
import { AttendanceCard } from "@/components/Student/AttendanceCard";
import { HomeworkCard } from "@/components/Student/HomeworkCard";
import { ExamsCard } from "@/components/Student/ExamsCard";
import { UploadHomeworkCard } from "@/components/Student/UploadHomeworkCard";

export function StudentComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <StudentDashboardHeader />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CoursesCard />
          <ProgressCard />
          <AttendanceCard />
          <HomeworkCard />
          <ExamsCard />
          <UploadHomeworkCard />
        </div>
      </main>
    </div>
  );
}
