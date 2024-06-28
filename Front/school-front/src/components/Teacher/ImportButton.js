// components/TeacherDashboard/ImportButton.js
import { Button } from "@/components/ui/button";
import { ImportIcon } from "./icons";

export function ImportButton() {
  return (
    <Button size="sm" variant="outline" className="h-8 gap-1">
      <ImportIcon className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
    </Button>
  );
}
