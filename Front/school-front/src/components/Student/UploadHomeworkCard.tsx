import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface Homework {
  homeworkId: number;
  title: string;
  description: string;
  dueDate: string;
  courseName: string;
  status: string;
}

interface Props {
  HomeWorks: Homework[];
  studentId: number;
}

export function UploadHomeworkCard({ HomeWorks, studentId }: Props) {
  const [selectedHomeworkTitle, setSelectedHomeworkTitle] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  let success = 'Homework uploaded successfully!';

  const handleHomeworkSelect = (value: string) => {
    setSelectedHomeworkTitle(value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedHomeworkTitle || !selectedFile) {
      setUploadStatus('Please select homework and a file to upload.');
      return;
    }

    const selectedHomework = HomeWorks.find(hw => hw.title === selectedHomeworkTitle);
    if (!selectedHomework) {
      setUploadStatus('Selected homework is not found.');
      return;
    }

    const homeworkId = selectedHomework.homeworkId;
    
    const formData = new FormData();
    formData.append('studentId', studentId.toString());
    formData.append('homeworkId', homeworkId.toString());
    formData.append('Status', 'Submited');
    formData.append('file', selectedFile); // This line sends the file itself
    
    try {
      const response = await fetch(`http://localhost:5143/api/StudentsHomework`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus(success);
      } else {
        setUploadStatus('Failed to upload homework.');
      }
    } catch (error) {
      console.error('Error uploading homework:', error);
      setUploadStatus('Error uploading homework.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Homework</CardTitle>
        <CardDescription>Submit your completed homework</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Label>Homework</Label>
          <Select onValueChange={handleHomeworkSelect}>
            <SelectTrigger>
              <SelectValue placeholder="Select homework" />
            </SelectTrigger>
            <SelectContent>
              {HomeWorks.map((homework) => (
                <SelectItem key={homework.title} value={homework.title}>
                  {homework.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Label>File</Label>
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleUpload}>Upload</Button>
          {uploadStatus && (
            <p className={uploadStatus === success ? 'text-green-500' : 'text-red-500'}>
              {uploadStatus}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
