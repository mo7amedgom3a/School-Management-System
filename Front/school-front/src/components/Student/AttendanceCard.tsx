// src/components/AttendanceCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
interface AttendanceCardProps {
  classAttendance: number;
  classMissed: number;
}
export function AttendanceCard({ classAttendance, classMissed }: AttendanceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <CardDescription>Your class attendance record</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between" style={{color:'green',}}>
            <div className="font-medium">Classes Attended</div>
            <div className="text-2xl font-bold">{classAttendance}</div>
          </div>
          <div className="flex items-center justify-between" style={{color:'red',}} >
            <div className="font-medium">Classes Missed</div>
            <div className="text-2xl font-bold">{classMissed}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
