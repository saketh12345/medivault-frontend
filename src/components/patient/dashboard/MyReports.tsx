
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Clock, Download, Eye, FileText, Share2 } from "lucide-react";

// Sample data for reports
const myReports = [
  { id: 1, title: "Blood Test Report", date: "2023-09-15", lab: "HealthLabs", type: "Blood Test", status: "Normal" },
  { id: 2, title: "Chest X-Ray", date: "2023-08-22", lab: "CityRadiology", type: "Radiology", status: "Abnormal" },
  { id: 3, title: "Lipid Profile", date: "2023-07-10", lab: "PremiumDiagnostics", type: "Blood Test", status: "Normal" },
  { id: 4, title: "ECG Report", date: "2023-06-05", lab: "HeartCare Center", type: "Cardiology", status: "Normal" },
];

const MyReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="text-medivault-blue h-5 w-5" />
          Reports Timeline
        </CardTitle>
        <CardDescription>View all your reports in chronological order</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Lab</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myReports.map((report) => (
              <TableRow
                key={report.id}
                className="border-b hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <TableCell className="font-medium">{report.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    {new Date(report.date).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell>{report.lab}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    report.status === 'Normal' 
                      ? 'bg-green-100 text-green-800' 
                      : report.status === 'Abnormal' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      <Eye className="h-3.5 w-3.5" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      <Download className="h-3.5 w-3.5" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      <Share2 className="h-3.5 w-3.5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Filter</Button>
        <Button className="bg-medivault-blue hover:bg-medivault-blue/90">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyReports;
