
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function TeacherExam() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Exams</CardTitle>
        <CardDescription>View and edit your students' exam results.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Exam</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="text-right">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Algebra Midterm</TableCell>
              <TableCell>2023-05-15</TableCell>
              <TableCell>A-</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Edit exam</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Edit Exam</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-name">Exam Name</Label>
                          <Input id="exam-name" defaultValue="Algebra Midterm" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-date">Date</Label>
                          <Input id="exam-date" type="date" defaultValue="2023-05-15" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-grade">Grade</Label>
                          <Select id="exam-grade" defaultValue="a-">
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="a">A</SelectItem>
                              <SelectItem value="a-">A-</SelectItem>
                              <SelectItem value="b">B</SelectItem>
                              <SelectItem value="b-">B-</SelectItem>
                              <SelectItem value="c">C</SelectItem>
                              <SelectItem value="c-">C-</SelectItem>
                              <SelectItem value="d">D</SelectItem>
                              <SelectItem value="f">F</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Exam</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">English Final</TableCell>
              <TableCell>2023-06-10</TableCell>
              <TableCell>B+</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Edit exam</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Edit Exam</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-name">Exam Name</Label>
                          <Input id="exam-name" defaultValue="English Final" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-date">Date</Label>
                          <Input id="exam-date" type="date" defaultValue="2023-06-10" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-grade">Grade</Label>
                          <Select id="exam-grade" defaultValue="b+">
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="a">A</SelectItem>
                              <SelectItem value="a-">A-</SelectItem>
                              <SelectItem value="b">B</SelectItem>
                              <SelectItem value="b-">B-</SelectItem>
                              <SelectItem value="c">C</SelectItem>
                              <SelectItem value="c-">C-</SelectItem>
                              <SelectItem value="d">D</SelectItem>
                              <SelectItem value="f">F</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Exam</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Biology Lab Practical</TableCell>
              <TableCell>2023-04-20</TableCell>
              <TableCell>B</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Edit exam</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Edit Exam</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-name">Exam Name</Label>
                          <Input id="exam-name" defaultValue="Biology Lab Practical" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-date">Date</Label>
                          <Input id="exam-date" type="date" defaultValue="2023-04-20" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-grade">Grade</Label>
                          <Select id="exam-grade" defaultValue="b">
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="a">A</SelectItem>
                              <SelectItem value="a-">A-</SelectItem>
                              <SelectItem value="b">B</SelectItem>
                              <SelectItem value="b-">B-</SelectItem>
                              <SelectItem value="c">C</SelectItem>
                              <SelectItem value="c-">C-</SelectItem>
                              <SelectItem value="d">D</SelectItem>
                              <SelectItem value="f">F</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Exam</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Chemistry Midterm</TableCell>
              <TableCell>2023-03-01</TableCell>
              <TableCell>C+</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Edit exam</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Edit Exam</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-name">Exam Name</Label>
                          <Input id="exam-name" defaultValue="Chemistry Midterm" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-date">Date</Label>
                          <Input id="exam-date" type="date" defaultValue="2023-03-01" />
                        </div>
                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                          <Label htmlFor="exam-grade">Grade</Label>
                          <Select id="exam-grade" defaultValue="c+">
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="a">A</SelectItem>
                              <SelectItem value="a-">A-</SelectItem>
                              <SelectItem value="b">B</SelectItem>
                              <SelectItem value="b-">B-</SelectItem>
                              <SelectItem value="c">C</SelectItem>
                              <SelectItem value="c-">C-</SelectItem>
                              <SelectItem value="d">D</SelectItem>
                              <SelectItem value="f">F</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Exam</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
