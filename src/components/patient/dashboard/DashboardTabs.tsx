
import { ReactNode, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardTabsProps {
  myReportsContent: ReactNode;
  myFamilyContent: ReactNode;
}

const DashboardTabs = ({ 
  myReportsContent, 
  myFamilyContent 
}: DashboardTabsProps) => {
  const [activeTab, setActiveTab] = useState("my-reports");
  const isMobile = useIsMobile();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs 
      defaultValue="my-reports" 
      className="w-full mb-8" 
      value={activeTab}
      onValueChange={handleTabChange}
    >
      <TabsList className={`w-full ${isMobile ? 'grid grid-cols-2' : 'max-w-md grid grid-cols-2'} mb-6`}>
        <TabsTrigger value="my-reports" className="flex items-center gap-2 px-2 py-2 text-xs sm:text-sm sm:px-3 sm:py-2.5">
          <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>My Reports</span>
        </TabsTrigger>
        <TabsTrigger value="my-family" className="flex items-center gap-2 px-2 py-2 text-xs sm:text-sm sm:px-3 sm:py-2.5">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>My Family</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="my-reports" className="px-0 sm:px-2">
        {myReportsContent}
      </TabsContent>
      
      <TabsContent value="my-family" className="px-0 sm:px-2">
        {myFamilyContent}
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
