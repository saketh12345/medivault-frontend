
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportsManagement from "@/components/lab/dashboard/ReportsManagement";
import PatientsOverview from "@/components/lab/dashboard/PatientsOverview";
import RecentActivityTab from "@/components/lab/dashboard/RecentActivityTab";

const LabDashboard = () => {
  const [activeTab, setActiveTab] = useState("reports");
  
  return (
    <DashboardLayout userType="lab">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, City Diagnostics!</h1>
        <p className="text-gray-600">Manage your patient reports efficiently</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="reports">Reports Management</TabsTrigger>
          <TabsTrigger value="patients">Patients Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reports">
          <ReportsManagement />
        </TabsContent>
        
        <TabsContent value="patients">
          <PatientsOverview />
        </TabsContent>
        
        <TabsContent value="activity">
          <RecentActivityTab />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default LabDashboard;
