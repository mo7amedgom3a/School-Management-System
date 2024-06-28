// src/components/AttendanceCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function AttendanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <CardDescription>Your class attendance record</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Classes Attended</div>
            <div className="text-2xl font-bold">125</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Classes Missed</div>
            <div className="text-2xl font-bold">15</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
