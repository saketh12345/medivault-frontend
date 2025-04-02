
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LabProfileSettings from "@/components/lab/settings/LabProfileSettings";
import SecurityComplianceSettings from "@/components/lab/settings/SecurityComplianceSettings";
import HelpSupportSettings from "@/components/lab/settings/HelpSupportSettings";

const Settings = () => {
  return (
    <DashboardLayout userType="lab">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile">Lab Profile</TabsTrigger>
            <TabsTrigger value="security">Security & Compliance</TabsTrigger>
            <TabsTrigger value="support">Help & Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <LabProfileSettings />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityComplianceSettings />
          </TabsContent>
          
          <TabsContent value="support">
            <HelpSupportSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
