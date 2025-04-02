
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb } from "lucide-react";

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

interface QuickActionsProps {
  showSummary: boolean;
}

const QuickActions = ({ showSummary }: QuickActionsProps) => {
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
            <Lightbulb className="text-medivault-blue h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common tasks you might want to do</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={showSummary ? "visible" : "hidden"}
            className="space-y-3"
          >
            <motion.div variants={itemVariants}>
              <Link to="/patient/download">
                <motion.div 
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button 
                    className="w-full mb-2 bg-medivault-blue group relative overflow-hidden"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0"
                      initial={{ x: -200, opacity: 0 }}
                      whileHover={{ 
                        x: 200, 
                        opacity: 1,
                        transition: { repeat: Infinity, duration: 1.5 }
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Download Reports
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/patient/settings">
                <motion.div 
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full relative overflow-hidden group"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-gray-100/0 via-gray-200/40 to-gray-100/0"
                      initial={{ x: -200, opacity: 0 }}
                      whileHover={{ 
                        x: 200, 
                        opacity: 1,
                        transition: { repeat: Infinity, duration: 1.5 }
                      }}
                    />
                    <span className="relative z-10">
                      Update Profile
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuickActions;
