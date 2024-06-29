import { Button } from "@/components/ui/button";

import {  BookIcon, UserPlusIcon, SchoolIcon } from "../Teacher/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Information() {
    return (
        <>
         <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <UserPlusIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">New Student Enrolled</div>
                      <div className="text-sm text-muted-foreground">John Doe - Grade 9</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <SchoolIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">New Teacher Hired</div>
                      <div className="text-sm text-muted-foreground">Jane Smith - Math</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <BookIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">New Class Added</div>
                      <div className="text-sm text-muted-foreground">Biology - Grade 11</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </>
    );
}