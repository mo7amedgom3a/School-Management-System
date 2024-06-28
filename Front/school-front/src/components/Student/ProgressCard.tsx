// src/components/ProgressCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ProgressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress</CardTitle>
        <CardDescription>Your overall academic progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">GPA</div>
            <div className="text-2xl font-bold">3.8</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Courses Completed</div>
            <div className="text-2xl font-bold">45</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Courses Remaining</div>
            <div className="text-2xl font-bold">15</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
