import { Button } from "@/components/ui/button";
import { UsersIcon, SchoolIcon, PencilIcon } from "../Teacher/icons"; // Assuming icons are moved to a common file

export default function QuickActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Button variant="outline" className="flex items-center justify-center gap-2">
        <UsersIcon className="h-5 w-5" />
        Manage Students
      </Button>
      <Button variant="outline" className="flex items-center justify-center gap-2">
        <SchoolIcon className="h-5 w-5" />
        Manage Teachers
      </Button>
      <Button variant="outline" className="flex items-center justify-center gap-2">
        <PencilIcon className="h-5 w-5" />
        Manage Classes
      </Button>
    </div>
  );
}
