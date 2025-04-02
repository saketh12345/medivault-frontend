
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileText, Share2 } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Sample data
const recentReports = [
  { id: 1, title: "Blood Test", date: "2023-06-15", lab: "HealthLabs" },
  { id: 2, title: "X-Ray Report", date: "2023-05-28", lab: "CityDiagnostics" },
  { id: 3, title: "MRI Scan", date: "2023-04-10", lab: "MediScans" },
];

const testCategories = [
  { name: "Blood Tests", count: 5 },
  { name: "Imaging", count: 4 },
  { name: "Pathology", count: 2 },
  { name: "Cardiology", count: 1 },
];

interface TestSummaryProps {
  showSummary: boolean;
}

const TestSummary = ({ showSummary }: TestSummaryProps) => {
  return (
    <motion.div
      initial="initial"
      animate={showSummary ? "animate" : "initial"}
      exit="exit"
      variants={{
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
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="text-medivault-blue h-5 w-5" />
            Test Summary
          </CardTitle>
          <CardDescription>Overview of all your medical tests</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={showSummary ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
            >
              {testCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:border-blue-100"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm text-gray-500">{category.name}</p>
                  <p className="text-2xl font-bold mt-1">{category.count}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3 
              variants={itemVariants}
              className="text-lg font-medium mb-4"
            >
              Recent Test Reports
            </motion.h3>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              {recentReports.map((report, index) => (
                <motion.div 
                  key={report.id} 
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 hover:bg-gray-50 p-2 rounded transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.3 } 
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <h4 className="font-medium">{report.title}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-500 mr-4">
                        {new Date(report.date).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        {report.lab}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-4 text-center"
            >
              <Link to="/patient/reports">
                <Button 
                  variant="outline"
                  className="hover:bg-medivault-blue hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                >
                  View All Reports
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestSummary;
