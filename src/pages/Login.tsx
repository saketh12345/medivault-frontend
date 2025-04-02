
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { User, Building2, Phone } from "lucide-react";

const Login = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialRole = queryParams.get("role") === "lab" ? "lab" : "patient";
  
  const [loginRole, setLoginRole] = useState(initialRole);
  const [patientPhone, setPatientPhone] = useState("");
  const [patientPassword, setPatientPassword] = useState("");
  const [labPhone, setLabPhone] = useState("");
  const [labPassword, setLabPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePatientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to MediVault",
      });
      navigate("/patient/dashboard");
    }, 1500);
  };

  const handleLabLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to MediVault",
      });
      navigate("/lab/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Login to MediVault</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-8 mb-6">
                <button 
                  onClick={() => setLoginRole("patient")}
                  className={`flex flex-col items-center transition-all duration-200 ${loginRole === "patient" ? "scale-105" : "opacity-60"}`}
                >
                  <div className={`bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md ${loginRole === "patient" ? "ring-2 ring-medivault-blue" : ""}`}>
                    <User size={28} className="text-medivault-blue" />
                  </div>
                  <span className={`font-medium ${loginRole === "patient" ? "text-medivault-blue" : "text-gray-500"}`}>Patient</span>
                </button>
                
                <button 
                  onClick={() => setLoginRole("lab")}
                  className={`flex flex-col items-center transition-all duration-200 ${loginRole === "lab" ? "scale-105" : "opacity-60"}`}
                >
                  <div className={`bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md ${loginRole === "lab" ? "ring-2 ring-medivault-blue" : ""}`}>
                    <Building2 size={28} className="text-medivault-blue" />
                  </div>
                  <span className={`font-medium ${loginRole === "lab" ? "text-medivault-blue" : "text-gray-500"}`}>Diagnostic Center</span>
                </button>
              </div>
              
              <div className="relative overflow-hidden">
                {loginRole === "patient" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handlePatientLogin}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="patient-phone">Phone Number</Label>
                          <Input 
                            id="patient-phone" 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="patient-password">Password</Label>
                            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input 
                            id="patient-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={patientPassword}
                            onChange={(e) => setPatientPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-medivault-blue" disabled={isLoading}>
                          {isLoading ? "Logging in..." : "Login as Patient"}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
                
                {loginRole === "lab" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleLabLogin}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="lab-phone">Phone Number</Label>
                          <Input 
                            id="lab-phone" 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            value={labPhone}
                            onChange={(e) => setLabPhone(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="lab-password">Password</Label>
                            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input 
                            id="lab-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={labPassword}
                            onChange={(e) => setLabPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-medivault-blue" disabled={isLoading}>
                          {isLoading ? "Logging in..." : "Login as Diagnostic Center"}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to={`/register?role=${loginRole}`} className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
