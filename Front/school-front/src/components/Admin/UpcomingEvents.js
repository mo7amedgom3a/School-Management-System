import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function UpcomingEvents() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-sm">Event 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Description for event 1</p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">Date: 2023-09-10</CardFooter>
      </Card>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-sm">Event 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Description for event 2</p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">Date: 2023-09-12</CardFooter>
      </Card>
    </div>
  );
}
