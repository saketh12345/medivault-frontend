
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Data Protection</CardTitle>
          <CardDescription>
            Our policies regarding the protection of your personal data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Data Collection</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  MediVault collects only the necessary information required to provide you with our services. 
                  This includes your personal details, medical reports, and account information. We never 
                  collect data beyond what is necessary for the functioning of our platform.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Data Storage & Security</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  All your data is stored in encrypted format on secure servers. We implement industry-standard 
                  security measures including end-to-end encryption, regular security audits, and strict access 
                  controls to ensure your information remains private and secure.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Data Sharing</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  MediVault does not share your personal data with third parties without your explicit consent. 
                  The only exceptions are when required by law or when necessary to provide our services, such as 
                  sharing medical reports with healthcare providers you have authorized.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Data Retention</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  We retain your data only for as long as necessary to provide you with our services or as 
                  required by applicable laws. You have the right to request deletion of your data at any time, 
                  subject to legal retention requirements for medical records.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Your Rights</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  You have the right to access, correct, or delete your personal data at any time. You can also 
                  request a copy of all the data we hold about you. To exercise these rights, please contact 
                  our support team.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
