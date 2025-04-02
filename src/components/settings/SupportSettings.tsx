
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const SupportSettings = () => {
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
            Need help? We're here to assist you with any questions or issues.
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
      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find quick answers to common questions about MediVault.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I add family members to my account?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  To add family members, navigate to the Dashboard and select the "My Family" tab. 
                  Then click on "Add Family Member" and fill in the required information.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I upload medical reports?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  You cannot directly upload reports. Reports must be uploaded by your laboratory or 
                  healthcare provider. Once they upload your reports, they will automatically appear 
                  in your Dashboard.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How secure is my medical data?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  MediVault uses industry-standard encryption and security protocols to protect your data. 
                  We are compliant with healthcare data protection regulations, and your information is 
                  only accessible to you and the healthcare providers you authorize.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I download my medical reports?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Yes, you can download your medical reports. Simply go to your Dashboard, navigate to 
                  the specific report you want to download, and click on the download icon.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  If you wish to delete your account, please contact our support team. Note that 
                  certain medical records may need to be retained for legal compliance purposes 
                  even after account deletion.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportSettings;
