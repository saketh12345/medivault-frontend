
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap } from "lucide-react";

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

interface HealthSummaryProps {
  showSummary: boolean;
}

const HealthSummary = ({ showSummary }: HealthSummaryProps) => {
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
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="text-medivault-blue h-5 w-5" />
            </motion.div>
            AI Health Summary
          </CardTitle>
          <CardDescription>Insights and trends based on your reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={showSummary ? "visible" : "hidden"}
            className="space-y-4"
          >
            <motion.div 
              variants={itemVariants}
              className="p-4 bg-blue-50 rounded-lg border border-blue-100 transform-gpu hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Brain className="h-6 w-6 text-medivault-blue mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900 mb-2">Your Health Overview</h4>
                  <p className="text-gray-700">
                    Based on your recent reports, your cholesterol levels have improved by 15% over the last 3 months. 
                    Your blood pressure readings remain within the normal range, and your glucose levels have stabilized.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="p-4 bg-green-50 rounded-lg border border-green-100 transform-gpu hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Zap className="h-6 w-6 text-green-600 mt-1" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900 mb-2">Recommendations</h4>
                  <p className="text-gray-700">
                    Continue with your current diet and exercise regimen. Consider scheduling a follow-up cardiology appointment
                    in the next 3 months to monitor progress.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 mt-4"
            >
              <motion.div className="transform hover:scale-105 transition-transform duration-300">
                <Button className="bg-medivault-blue hover:bg-medivault-blue/90 transition-all duration-300">
                  View Detailed Analysis
                </Button>
              </motion.div>
              
              <motion.div className="transform hover:scale-105 transition-transform duration-300">
                <Button 
                  variant="outline"
                  className="hover:bg-gray-100 transition-all duration-300"
                >
                  Share with Doctor
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HealthSummary;
