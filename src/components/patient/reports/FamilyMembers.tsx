
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, FolderPlus, UserPlus, Users } from "lucide-react";

// Sample data for family members
const familyMembers = [
  { id: 1, name: "Sarah Smith", relation: "Spouse", reports: 8 },
  { id: 2, name: "Alex Smith", relation: "Son", reports: 3 },
  { id: 3, name: "Emily Smith", relation: "Daughter", reports: 5 },
];

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

const FamilyMembers = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="text-medivault-blue h-5 w-5" />
          Family Members
        </CardTitle>
        <CardDescription>Manage your family's health records</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div 
            className="flex justify-end mb-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button className="bg-medivault-blue hover:bg-medivault-blue/90 transition-all duration-200">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Family Member
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {familyMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.relation}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">Reports</span>
                      <span className="font-semibold text-lg">{member.reports}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" className="w-full justify-start">
                          <Folder className="mr-2 h-4 w-4" />
                          View Reports
                        </Button>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" className="w-full justify-start">
                          <FolderPlus className="mr-2 h-4 w-4" />
                          Add Reports
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Add New Family Member Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-dashed border-2 flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <UserPlus className="h-6 w-6 text-medivault-blue" />
                  </div>
                  <h3 className="font-medium text-lg mb-1">Add New Family Member</h3>
                  <p className="text-sm text-gray-500 mb-4">Create a separate folder for a family member</p>
                  <Button className="bg-medivault-blue hover:bg-medivault-blue/90">
                    Add Member
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default FamilyMembers;
