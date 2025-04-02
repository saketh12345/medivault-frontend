
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ReportsHeader from "@/components/patient/reports/ReportsHeader";
import ReportsTabs from "@/components/patient/reports/ReportsTabs";
import ReportsCard from "@/components/patient/reports/ReportsCard";
import FamilyMembers from "@/components/patient/reports/FamilyMembers";

const PatientReports = () => {
  return (
    <DashboardLayout userType="patient">
      <ReportsHeader />
      <ReportsTabs 
        myReportsContent={<ReportsCard />}
        myFamilyContent={<FamilyMembers />}
      />
    </DashboardLayout>
  );
};

export default PatientReports;
