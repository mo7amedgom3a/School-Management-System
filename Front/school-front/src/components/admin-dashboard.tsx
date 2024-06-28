import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from "@/components/ui/card"
import  Header  from './Admin/Header';
import  Sidebar  from "./Admin/Sidebar"
import StatsCards from "./Admin/StatsCards"
import { UserPlusIcon, BookIcon, CalendarIcon, TrophyIcon, PresentationIcon, SchoolIcon } from "@/components/Teacher/icons"
export function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <Sidebar/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
         <StatsCards/>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </main>
      </div>
    </div>
  )
}