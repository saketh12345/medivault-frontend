
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const SecurityComplianceSettings = () => {
  const handlePrivacySettingChange = () => {
    toast.success("Privacy setting updated successfully");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Data Protection Policies</CardTitle>
          <CardDescription>
            Control how patient data is stored, processed, and shared
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>HIPAA Compliance</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-4">
                  MediVault ensures strict adherence to Health Insurance Portability and Accountability Act (HIPAA) 
                  regulations. All patient data is encrypted, access-controlled, and protected against unauthorized use.
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="audit-logging">Audit Logging</Label>
                    <p className="text-xs text-muted-foreground">
                      Track all access to patient records for compliance
                    </p>
                  </div>
                  <Switch 
                    id="audit-logging" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="privacy-notifications">Privacy Breach Notifications</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive alerts for unauthorized access attempts
                    </p>
                  </div>
                  <Switch 
                    id="privacy-notifications" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Data Retention</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our data retention policy ensures that patient records are maintained for the legally required 
                  period (typically 7 years) and then properly archived or disposed of according to regulations.
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-archive">Automatic Archiving</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically archive records older than the retention period
                    </p>
                  </div>
                  <Switch 
                    id="auto-archive" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Patient Consent Management</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage how patient consent is obtained, recorded, and maintained for different types of tests 
                  and report sharing. Configure automatic consent renewal reminders.
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="consent-verification">Consent Verification</Label>
                    <p className="text-xs text-muted-foreground">
                      Require verification before sharing sensitive reports
                    </p>
                  </div>
                  <Switch 
                    id="consent-verification" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="consent-reminders">Consent Renewal Reminders</Label>
                    <p className="text-xs text-muted-foreground">
                      Send automatic reminders when consent is expiring
                    </p>
                  </div>
                  <Switch 
                    id="consent-reminders" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Access Controls</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configure user access levels and permissions for your lab staff. Restrict access based on 
                  role, department, or individual assignment.
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="role-based-access">Role-Based Access Control</Label>
                    <p className="text-xs text-muted-foreground">
                      Restrict access to patient data based on staff roles
                    </p>
                  </div>
                  <Switch 
                    id="role-based-access" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-xs text-muted-foreground">
                      Require additional verification for sensitive operations
                    </p>
                  </div>
                  <Switch 
                    id="two-factor" 
                    defaultChecked 
                    onCheckedChange={handlePrivacySettingChange}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Security Assessment</CardTitle>
          <CardDescription>
            Review your lab's security status and compliance level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-xl p-6 bg-gray-50">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
            
            <h3 className="text-center text-lg font-medium mb-2">Your lab is HIPAA compliant</h3>
            <p className="text-center text-sm text-muted-foreground mb-4">
              Last security assessment performed on May 15, 2023
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-sm font-medium">Data Protection</p>
                <p className="text-xs text-muted-foreground">100% Compliant</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-sm font-medium">Access Controls</p>
                <p className="text-xs text-muted-foreground">100% Compliant</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-sm font-medium">Breach Prevention</p>
                <p className="text-xs text-muted-foreground">95% Compliant</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-sm font-medium">Staff Training</p>
                <p className="text-xs text-muted-foreground">90% Compliant</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline">Run New Assessment</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityComplianceSettings;
