// src/components/UploadHomeworkCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function UploadHomeworkCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Homework</CardTitle>
        <CardDescription>Submit your completed homework</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="course">Course</Label>
            <Select id="course" defaultValue="cs101">
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs101">Introduction to Computer Science</SelectItem>
                <SelectItem value="calc1">Calculus I</SelectItem>
                <SelectItem value="eng101">English Composition</SelectItem>
                <SelectItem value="psych101">Introduction to Psychology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="assignment">Assignment</Label>
            <Input id="assignment" type="text" placeholder="Enter assignment name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="file">File</Label>
            <div />
          </div>
          <Button type="submit">Upload</Button>
        </form>
      </CardContent>
    </Card>
  );
}
