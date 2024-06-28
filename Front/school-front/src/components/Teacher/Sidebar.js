// components/TeacherDashboard/Sidebar.js
import Link from "next/link";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { BookIcon, CalendarIcon, ClipboardIcon, SettingsIcon, UsersIcon, PencilIcon, TooltipLink } from "./icons";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          prefetch={false}
        >
          <PencilIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Classroom</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5" />
              <span className="sr-only">Students</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Students</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <BookIcon className="h-5 w-5" />
              <span className="sr-only">Grades</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Grades</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <CalendarIcon className="h-5 w-5" />
              <span className="sr-only">Exams</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Exams</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <ClipboardIcon className="h-5 w-5" />
              <span className="sr-only">Homework</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Homework</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <SettingsIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>
  );
}
