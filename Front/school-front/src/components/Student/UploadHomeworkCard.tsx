import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Select from 'react-select';
import SelectTrigger from 'react-select';
import SelectContent from 'react-select';
import SelectItem from 'react-select';
import SelectValue from 'react-select';

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
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
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
          <Select
            trigger={SelectTrigger}
            content={SelectContent}
            item={SelectItem}
            value={SelectValue}
            options={HomeWorks.map(hw => ({ value: hw.title, label: hw.title }))}
            onChange={(value) => handleHomeworkSelect(value)}
          />
          <Label>File</Label>
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleUpload}>Upload</Button>
          {uploadStatus && (
            
              <p style={{ color: uploadStatus === success ? 'green' : 'red' }}>{uploadStatus}</p>
            
          )}
        </div>
      </CardContent>
    </Card>
  );
}
