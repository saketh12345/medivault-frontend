
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Phone, Search } from "lucide-react";

const UploadPage = () => {
  const [patientPhone, setPatientPhone] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientFound, setPatientFound] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [reportType, setReportType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const { toast } = useToast();

  // Sample patients (in a real app, this would come from an API)
  const patients = [
    { id: "1", name: "John Doe", phone: "+1 (555) 123-4567" },
    { id: "2", name: "Sarah Smith", phone: "+1 (555) 234-5678" },
    { id: "3", name: "Michael Johnson", phone: "+1 (555) 345-6789" },
    { id: "4", name: "Emily Wilson", phone: "+1 (555) 456-7890" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const searchPatient = () => {
    if (!patientPhone) {
      toast({
        title: "Phone Number Required",
        description: "Please enter a patient's phone number to search",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate API call to search for patient
    setTimeout(() => {
      const foundPatient = patients.find(p => p.phone === patientPhone);
      
      if (foundPatient) {
        setPatientFound(true);
        setPatientId(foundPatient.id);
        setPatientName(foundPatient.name);
        toast({
          title: "Patient Found",
          description: `Found ${foundPatient.name} in the system.`,
        });
      } else {
        setPatientFound(false);
        setPatientId("");
        setPatientName("");
        toast({
          title: "Patient Not Found",
          description: "No patient with that phone number was found in our system.",
          variant: "destructive",
        });
      }
      
      setIsSearching(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientId || !reportType || !file) {
      toast({
        title: "Missing Information",
        description: "Please fill all the fields and select a file",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setPatientPhone("");
      setPatientId("");
      setPatientFound(false);
      setPatientName("");
      setReportType("");
      setFile(null);
      
      // Reset file input
      const fileInput = document.getElementById("report-file") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      
      toast({
        title: "Report Uploaded",
        description: "The report has been successfully uploaded and will be visible to the patient.",
      });
    }, 1500);
  };

  return (
    <DashboardLayout userType="lab">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upload Report</h1>
        <p className="text-gray-600">Upload a new patient report to the system</p>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>New Report</CardTitle>
          <CardDescription>
            Find the patient by phone number and upload their health report
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 pb-6 border-b">
            <div className="space-y-2">
              <Label htmlFor="patient-search">Patient Phone Number</Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input 
                    id="patient-search" 
                    type="tel"
                    placeholder="+1 (555) 000-0000" 
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={searchPatient} 
                  disabled={isSearching}
                  className="bg-medivault-blue"
                >
                  {isSearching ? "Searching..." : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Find Patient
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {patientFound && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-medium">Patient found: {patientName}</p>
                <p className="text-green-700 text-sm">You can now upload a report for this patient.</p>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType} disabled={!patientFound}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blood-test">Blood Test</SelectItem>
                  <SelectItem value="x-ray">X-Ray</SelectItem>
                  <SelectItem value="mri">MRI Scan</SelectItem>
                  <SelectItem value="ct-scan">CT Scan</SelectItem>
                  <SelectItem value="ultrasound">Ultrasound</SelectItem>
                  <SelectItem value="covid-test">COVID Test</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="report-file">Upload File</Label>
              <Input 
                id="report-file" 
                type="file" 
                accept=".pdf,.jpg,.jpeg,.png" 
                onChange={handleFileChange}
                disabled={!patientFound}
              />
              <p className="text-xs text-gray-500">
                Accepted formats: PDF, JPG, JPEG, PNG (Max size: 10MB)
              </p>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-medivault-blue" 
                disabled={isUploading || !patientFound}
              >
                {isUploading ? (
                  "Uploading..."
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Report
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default UploadPage;
