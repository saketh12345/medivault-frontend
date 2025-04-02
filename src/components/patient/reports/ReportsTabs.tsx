
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Users } from "lucide-react";

interface ReportsTabsProps {
  myReportsContent: ReactNode;
  myFamilyContent: ReactNode;
}

const ReportsTabs = ({ myReportsContent, myFamilyContent }: ReportsTabsProps) => {
  const [activeTab, setActiveTab] = useState("my-reports");
  const [showTabContent, setShowTabContent] = useState(true);

  const handleTabChange = (value: string) => {
    setShowTabContent(false);
    setActiveTab(value);
    setTimeout(() => setShowTabContent(true), 100);
  };

  const cardVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      y: 10, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Tabs 
      defaultValue="my-reports" 
      className="w-full" 
      value={activeTab}
      onValueChange={handleTabChange}
    >
      <TabsList className="w-full max-w-md grid grid-cols-2 mb-6">
        <TabsTrigger 
          value="my-reports"
          className="relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            My Reports
          </span>
          {activeTab === "my-reports" && (
            <motion.div 
              className="absolute inset-0 bg-medivault-blue/10"
              layoutId="activeTabBackground" 
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
        </TabsTrigger>
        <TabsTrigger 
          value="my-family"
          className="relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Users className="w-4 h-4" />
            My Family
          </span>
          {activeTab === "my-family" && (
            <motion.div 
              className="absolute inset-0 bg-medivault-blue/10"
              layoutId="activeTabBackground" 
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
        </TabsTrigger>
      </TabsList>

      <AnimatePresence mode="wait">
        {showTabContent && (
          <>
            <TabsContent value="my-reports">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={cardVariants}
                className="space-y-6"
              >
                {myReportsContent}
              </motion.div>
            </TabsContent>

            <TabsContent value="my-family">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={cardVariants}
                className="space-y-6"
              >
                {myFamilyContent}
              </motion.div>
            </TabsContent>
          </>
        )}
      </AnimatePresence>
    </Tabs>
  );
};

export default ReportsTabs;
