import { Button } from "@/components/ui/button";

import {  BookIcon, UserPlusIcon } from "../Teacher/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminControl(){
    return (
        <>
        <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button variant="outline" className="justify-start gap-2">
                    <UserPlusIcon className="h-5 w-5" />
                    Add Student
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <UserPlusIcon className="h-5 w-5" />
                    Add Teacher
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <BookIcon className="h-5 w-5" />
                    Add Class
                  </Button>
                </div>
              </CardContent>
            </Card>
        </>
       
    )
} 