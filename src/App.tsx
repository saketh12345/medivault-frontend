
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import PatientDashboard from "./pages/patient/Dashboard";
import PatientSettings from "./pages/patient/Settings";
import LabDashboard from "./pages/lab/Dashboard";
import LabSettings from "./pages/lab/Settings";
import UploadPage from "./pages/lab/Upload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-started" element={<GetStarted />} />
          
          {/* Patient Routes */}
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/settings" element={<PatientSettings />} />
          {/* Additional patient routes can be added here */}
          
          {/* Lab Routes */}
          <Route path="/lab/dashboard" element={<LabDashboard />} />
          <Route path="/lab/settings" element={<LabSettings />} />
          <Route path="/lab/upload" element={<UploadPage />} />
          {/* Additional lab routes can be added here */}
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
