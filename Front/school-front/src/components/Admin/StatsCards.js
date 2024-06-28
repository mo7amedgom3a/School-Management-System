import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { UsersIcon, SchoolIcon, PencilIcon } from "../Teacher/icons"; // Assuming icons are moved to a common file

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Students</CardDescription>
        <CardTitle className="text-4xl">1,234</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="text-xs text-muted-foreground">+5% from last month</div>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Teachers</CardDescription>
        <CardTitle className="text-4xl">87</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="text-xs text-muted-foreground">+3% from last month</div>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Active Classes</CardDescription>
        <CardTitle className="text-4xl">42</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="text-xs text-muted-foreground">+2% from last month</div>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Upcoming Events</CardDescription>
        <CardTitle className="text-4xl">8</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="text-xs text-muted-foreground">+1 from last month</div>
      </CardFooter>
    </Card>
  </div>
  );
}
