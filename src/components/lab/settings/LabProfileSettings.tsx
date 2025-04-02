
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const LabProfileSettings = () => {
  const [labName, setLabName] = useState("City Diagnostics");
  const [director, setDirector] = useState("Dr. Jane Smith");
  const [email, setEmail] = useState("info@citydiagnostics.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [address, setAddress] = useState("123 Medical Plaza, Suite 100, New York, NY 10001");
  const [description, setDescription] = useState("Providing accurate and timely diagnostic services since 2005.");
  const [licenseNumber, setLicenseNumber] = useState("NY-DIAG-12345");
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save the lab profile data to the server here
    toast.success("Lab profile updated successfully");
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Lab Information</CardTitle>
          <CardDescription>
            Update your diagnostic center's details and contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="labName">Lab Name</Label>
                <Input 
                  id="labName" 
                  value={labName} 
                  onChange={(e) => setLabName(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="director">Lab Director</Label>
                <Input 
                  id="director" 
                  value={director} 
                  onChange={(e) => setDirector(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Lab Description</Label>
                <Textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Certifications & Credentials</CardTitle>
          <CardDescription>
            Manage your lab's licenses and accreditations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">License Number</Label>
              <Input 
                id="licenseNumber" 
                value={licenseNumber} 
                onChange={(e) => setLicenseNumber(e.target.value)} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="certifications">Accreditations</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center p-2 border rounded-md">
                  <input type="checkbox" id="clia" className="mr-2" defaultChecked />
                  <Label htmlFor="clia" className="cursor-pointer">CLIA Certified</Label>
                </div>
                <div className="flex items-center p-2 border rounded-md">
                  <input type="checkbox" id="cap" className="mr-2" defaultChecked />
                  <Label htmlFor="cap" className="cursor-pointer">CAP Accredited</Label>
                </div>
                <div className="flex items-center p-2 border rounded-md">
                  <input type="checkbox" id="iso" className="mr-2" defaultChecked />
                  <Label htmlFor="iso" className="cursor-pointer">ISO 15189</Label>
                </div>
                <div className="flex items-center p-2 border rounded-md">
                  <input type="checkbox" id="jcaho" className="mr-2" />
                  <Label htmlFor="jcaho" className="cursor-pointer">JCAHO Accredited</Label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Update Credentials</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LabProfileSettings;
