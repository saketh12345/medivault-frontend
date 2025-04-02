
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const PatientsOverview = () => {
  // Sample data (in a real app, this would come from an API)
  const patients = [
    { id: 1, name: "John Doe", phone: "+1 (555) 123-4567", reportCount: 3, lastVisit: "2023-06-15" },
    { id: 2, name: "Sarah Smith", phone: "+1 (555) 234-5678", reportCount: 5, lastVisit: "2023-06-14" },
    { id: 3, name: "Michael Johnson", phone: "+1 (555) 345-6789", reportCount: 2, lastVisit: "2023-06-12" },
    { id: 4, name: "Emily Wilson", phone: "+1 (555) 456-7890", reportCount: 1, lastVisit: "2023-06-10" },
    { id: 5, name: "Robert Brown", phone: "+1 (555) 567-8901", reportCount: 4, lastVisit: "2023-06-08" }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Patients</CardTitle>
            <CardDescription>Patients served</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-medivault-blue mr-4" />
              <span className="text-3xl font-bold">45</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Patient Search</CardTitle>
            <CardDescription>Search by phone number</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Phone number" className="pl-8" />
              </div>
              <Button className="w-full bg-medivault-blue">Search Patient</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Patient Directory</CardTitle>
            <CardDescription>View and manage all registered patients</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Reports</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{patient.reportCount}</TableCell>
                    <TableCell>{new Date(patient.lastVisit).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View History</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="mt-4 text-center">
              <Link to="/lab/patients">
                <Button variant="outline">View All Patients</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientsOverview;
