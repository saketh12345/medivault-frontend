
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const HelpSupportSettings = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) {
      toast.error("Please fill out all fields");
      return;
    }
    
    // In a real app, we would send the support request to the server here
    toast.success("Support request submitted successfully");
    setSubject("");
    setMessage("");
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Need help? Our team is available to assist with any technical issues or questions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                placeholder="Enter the subject of your inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your issue or question in detail"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <div className="flex justify-end">
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>
              Access guides and tutorials for using MediVault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-medivault-blue mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Getting Started Guide</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Learn the basics of using MediVault for your diagnostic center
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-medivault-blue mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Report Management</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    How to upload, manage, and share diagnostic reports
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-medivault-blue mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Patient Management</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    How to add and manage patient records
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <HelpCircle className="h-5 w-5 text-medivault-blue mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Data Security Guide</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Best practices for maintaining HIPAA compliance
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I upload a new patient report?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    To upload a new patient report, navigate to the Dashboard, click on the "Upload New Report" button, 
                    select the patient, choose the report type, and upload the file. The system supports PDF, JPEG, and PNG formats.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I add a new patient?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    New patients are automatically added when you upload their first report. Enter their phone number, 
                    name, and email address during the upload process. They will receive registration instructions via email.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How are patient reports secured?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    All patient reports are encrypted using AES-256 encryption. Access is restricted to authorized personnel 
                    and the patient themselves. All access to reports is logged for audit purposes, and we are fully 
                    HIPAA compliant.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I manage lab staff access?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Go to Settings → Security & Compliance → Access Controls to manage staff access levels. 
                    You can create different roles with specific permissions and assign staff members to these roles.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Live Chat Support</CardTitle>
          <CardDescription>
            Connect with our support team for immediate assistance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <MessageCircle className="h-10 w-10 text-medivault-blue mr-4" />
              <div>
                <h4 className="font-medium">Start a live chat session</h4>
                <p className="text-sm text-muted-foreground">
                  Available Monday to Friday, 9 AM - 6 PM EST
                </p>
              </div>
            </div>
            <Button>Start Chat</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupportSettings;
