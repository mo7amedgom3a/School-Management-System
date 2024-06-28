// components/TeacherDashboard/Header.js
import { Button } from "@/components/ui/button";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { SearchBar } from "./SearchBar";
import { AvatarMenu } from "./AvatarMenu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, TooltipLink } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <TooltipLink href="#" tooltip="Classroom" icon={PencilIcon} bgColor="bg-primary" />
            <TooltipLink href="#" tooltip="Students" icon={UsersIcon} />
            <TooltipLink href="#" tooltip="Grades" icon={BookIcon} />
            <TooltipLink href="#" tooltip="Exams" icon={CalendarIcon} />
            <TooltipLink href="#" tooltip="Homework" icon={ClipboardIcon} />
            <TooltipLink href="#" tooltip="Settings" icon={SettingsIcon} />
          </nav>
        </SheetContent>
      </Sheet>
      <BreadcrumbNavigation />
      <SearchBar />
      <AvatarMenu />
    </header>
  );
}
