// src/components/Resources.jsx

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";
import { Button } from "../components/ui/Button";

const Resources = () => {
  // Sample data
  const resources = [
    { name: "CS50 - Introduction to Computer Science", type: "Online Course", link: "https://cs50.harvard.edu" },
    { name: "Khan Academy - Calculus", type: "Video Series", link: "https://khanacademy.org" },
    { name: "Purdue OWL - Writing Lab", type: "Website", link: "https://owl.purdue.edu" },
    { name: "Psychology Today - Research", type: "Article", link: "https://psychologytoday.com" },
  ];

  return (
    <section id="resources" className="mt-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Resources</CardTitle>
          <Button>Add Resource</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resource</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resources.map((resource, index) => (
                <TableRow key={index}>
                  <TableCell>{resource.name}</TableCell>
                  <TableCell>{resource.type}</TableCell>
                  <TableCell>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {resource.link}
                    </a>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost">Edit</Button>
                    <Button variant="ghost">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default Resources;
