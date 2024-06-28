// components/TeacherDashboard/AddButton.js
import { Button } from "@/components/ui/button";
import { PlusIcon } from "./icons";

export function AddButton() {
  return (
    <Button size="sm" className="h-8 gap-1">
      <PlusIcon className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add</span>
    </Button>
  );
}
