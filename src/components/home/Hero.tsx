
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Your Health Reports
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Anytime, Anywhere
        </h2>
        <p className="text-xl mb-8 text-white">
          Access, track, and share your medical reports anytime 
          <br />
          secure & hassle-free 
          <span className="font-bold"> health management.</span>
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-medivault-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 7H9M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white font-medium">Patients</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mb-3">
              <svg className="w-12 h-12 text-medivault-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V8H8M3 3H8M3 3L8 8M21 3V8H16M21 3H16M21 3L16 8M3 21V16H8M3 21H8M3 21L8 16M21 21V16H16M21 21H16M21 21L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-white font-medium">Lab</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <Link to="/register?role=patient">
            <Button className="bg-white text-medivault-blue hover:bg-white/90 px-6 py-6 text-lg">
              I'm a Patient
            </Button>
          </Link>
          <Link to="/register?role=lab">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
              I'm a Diagnostic Center
            </Button>
          </Link>
        </div>
      </div>
      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
