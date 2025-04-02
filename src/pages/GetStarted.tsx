
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Building2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === "patient") {
      navigate("/register?role=patient");
    } else if (selectedRole === "lab") {
      navigate("/register?role=lab");
    }
  };

  const handleExistingAccount = () => {
    if (selectedRole === "patient") {
      navigate("/login?role=patient");
    } else if (selectedRole === "lab") {
      navigate("/login?role=lab");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16 px-4 bg-gradient-to-b from-medivault-blue to-medivault-lightBlue">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-center mb-8 text-medivault-blue">
            Choose How You Want to Use MediVault
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all ${
                selectedRole === "patient" 
                  ? "bg-medivault-blue text-white shadow-lg" 
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedRole("patient")}
            >
              <div className={`rounded-full w-24 h-24 flex items-center justify-center mb-4 ${
                selectedRole === "patient" 
                  ? "bg-white" 
                  : "bg-white shadow"
              }`}>
                <User size={48} className={selectedRole === "patient" ? "text-medivault-blue" : "text-gray-700"} />
              </div>
              <h2 className="text-xl font-semibold mb-2">I'm a Patient</h2>
              <p className={`text-center ${selectedRole === "patient" ? "text-white/80" : "text-gray-600"}`}>
                Access and manage your health reports from various diagnostic centers in one place.
              </p>
            </motion.div>
            
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all ${
                selectedRole === "lab" 
                  ? "bg-medivault-blue text-white shadow-lg" 
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedRole("lab")}
            >
              <div className={`rounded-full w-24 h-24 flex items-center justify-center mb-4 ${
                selectedRole === "lab" 
                  ? "bg-white" 
                  : "bg-white shadow"
              }`}>
                <Building2 size={48} className={selectedRole === "lab" ? "text-medivault-blue" : "text-gray-700"} />
              </div>
              <h2 className="text-xl font-semibold mb-2">I'm a Diagnostic Center</h2>
              <p className={`text-center ${selectedRole === "lab" ? "text-white/80" : "text-gray-600"}`}>
                Upload and manage patient reports, making them easily accessible to your patients.
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleContinue}
              disabled={!selectedRole}
              className="w-full py-6 text-lg bg-medivault-blue hover:bg-medivault-blue/90 disabled:opacity-50"
            >
              Create a Free Account
            </Button>
            
            <div className="text-center">
              <button 
                onClick={handleExistingAccount}
                disabled={!selectedRole}
                className="text-medivault-blue hover:underline font-medium disabled:opacity-50 disabled:no-underline"
              >
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
