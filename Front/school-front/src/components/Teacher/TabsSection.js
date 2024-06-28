// components/TeacherDashboard/TabsSection.js
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StudentsTable } from "./StudentTable";
import { FilterButton } from "./FilterButton";
import { ImportButton } from "./ImportButton";
import { AddButton } from "./AddButton";

export function TabsSection() {
  return (
    <Tabs defaultValue="students">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="exams">Exams</TabsTrigger>
          <TabsTrigger value="homework">Homework</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <FilterButton />
          <ImportButton />
          <AddButton />
        </div>
      </div>
      <TabsContent value="students">
        <StudentsTable />
      </TabsContent>
    </Tabs>
  );
}
