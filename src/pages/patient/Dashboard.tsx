
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/patient/dashboard/DashboardHeader";
import DashboardTabs from "@/components/patient/dashboard/DashboardTabs";
import MyReports from "@/components/patient/dashboard/MyReports";
import MyFamily from "@/components/patient/dashboard/MyFamily";

const PatientDashboard = () => {
  const [greeting, setGreeting] = useState<string>(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  });

  return (
    <DashboardLayout userType="patient">
      <DashboardHeader 
        title={`${greeting}, John Doe`}
        subtitle="Here's an overview of your health reports and records"
      />
      
      <DashboardTabs 
        myReportsContent={<MyReports />}
        myFamilyContent={<MyFamily />}
      />
    </DashboardLayout>
  );
};

export default PatientDashboard;
