
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { User, Building2, Phone } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") === "lab" ? "lab" : "patient";
  
  const [registerRole, setRegisterRole] = useState(initialRole);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientPassword, setPatientPassword] = useState("");
  const [patientConfirmPassword, setPatientConfirmPassword] = useState("");
  
  const [labName, setLabName] = useState("");
  const [labPhone, setLabPhone] = useState("");
  const [labPassword, setLabPassword] = useState("");
  const [labConfirmPassword, setLabConfirmPassword] = useState("");
  const [labLicense, setLabLicense] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setRegisterRole(initialRole);
  }, [initialRole]);

  const handlePatientRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (patientPassword !== patientConfirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now log in.",
      });
      navigate("/login");
    }, 1500);
  };

  const handleLabRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (labPassword !== labConfirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now log in.",
      });
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Register to start managing your health reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-8 mb-6">
                <button 
                  onClick={() => setRegisterRole("patient")}
                  className={`flex flex-col items-center transition-all duration-200 ${registerRole === "patient" ? "scale-105" : "opacity-60"}`}
                >
                  <div className={`bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md ${registerRole === "patient" ? "ring-2 ring-medivault-blue" : ""}`}>
                    <User size={28} className="text-medivault-blue" />
                  </div>
                  <span className={`font-medium ${registerRole === "patient" ? "text-medivault-blue" : "text-gray-500"}`}>Patient</span>
                </button>
                
                <button 
                  onClick={() => setRegisterRole("lab")}
                  className={`flex flex-col items-center transition-all duration-200 ${registerRole === "lab" ? "scale-105" : "opacity-60"}`}
                >
                  <div className={`bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md ${registerRole === "lab" ? "ring-2 ring-medivault-blue" : ""}`}>
                    <Building2 size={28} className="text-medivault-blue" />
                  </div>
                  <span className={`font-medium ${registerRole === "lab" ? "text-medivault-blue" : "text-gray-500"}`}>Diagnostic Center</span>
                </button>
              </div>
              
              <div className="relative overflow-hidden">
                {registerRole === "patient" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handlePatientRegister}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="patient-name">Full Name</Label>
                          <Input 
                            id="patient-name" 
                            placeholder="John Doe" 
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                          />
                        </div>
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
                          <Label htmlFor="patient-password">Password</Label>
                          <Input 
                            id="patient-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={patientPassword}
                            onChange={(e) => setPatientPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patient-confirm-password">Confirm Password</Label>
                          <Input 
                            id="patient-confirm-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={patientConfirmPassword}
                            onChange={(e) => setPatientConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-medivault-blue" disabled={isLoading}>
                          {isLoading ? "Creating account..." : "Register as Patient"}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
                
                {registerRole === "lab" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleLabRegister}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="lab-name">Center Name</Label>
                          <Input 
                            id="lab-name" 
                            placeholder="ABC Diagnostics" 
                            value={labName}
                            onChange={(e) => setLabName(e.target.value)}
                            required
                          />
                        </div>
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
                          <Label htmlFor="lab-license">License Number</Label>
                          <Input 
                            id="lab-license" 
                            placeholder="License Number" 
                            value={labLicense}
                            onChange={(e) => setLabLicense(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lab-password">Password</Label>
                          <Input 
                            id="lab-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={labPassword}
                            onChange={(e) => setLabPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lab-confirm-password">Confirm Password</Label>
                          <Input 
                            id="lab-confirm-password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={labConfirmPassword}
                            onChange={(e) => setLabConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-medivault-blue" disabled={isLoading}>
                          {isLoading ? "Creating account..." : "Register as Diagnostic Center"}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to={`/login?role=${registerRole}`} className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
