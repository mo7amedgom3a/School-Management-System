// components/TeacherDashboard/Sidebar.js
import Link from "next/link";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { BookIcon, CalendarIcon, ClipboardIcon, SettingsIcon, UsersIcon, PencilIcon, TooltipLink } from "./icons";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <TooltipLink href="#" tooltip="Classroom" icon={PencilIcon} bgColor="bg-primary" />
          <TooltipLink href="#" tooltip="Students" icon={UsersIcon} />
          <TooltipLink href="#" tooltip="Grades" icon={BookIcon} />
          <TooltipLink href="#" tooltip="Exams" icon={CalendarIcon} />
          <TooltipLink href="#" tooltip="Homework" icon={ClipboardIcon} />
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <TooltipLink href="#" tooltip="Settings" icon={SettingsIcon} />
        </TooltipProvider>
      </nav>
    </aside>
  );
}
