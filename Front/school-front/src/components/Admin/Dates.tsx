import { Button } from "@/components/ui/button";

import { CalendarIcon, TrophyIcon, PresentationIcon } from "../Teacher/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Dates() {
    return(
        <>
        <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CalendarIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Parent-Teacher Conference</div>
                      <div className="text-sm text-muted-foreground">May 15, 2023 - 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <TrophyIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Annual Sports Day</div>
                      <div className="text-sm text-muted-foreground">June 1, 2023 - 9:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <PresentationIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Science Fair</div>
                      <div className="text-sm text-muted-foreground">July 1, 2023 - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </>
    );
}