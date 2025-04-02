
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["secure", "accessible", "organized", "reliable", "convenient"], []);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  
  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-white">Your health records are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span 
                    key={index} 
                    className="absolute font-semibold text-white" 
                    initial={{ opacity: 0, y: "-100" }} 
                    transition={{ type: "spring", stiffness: 50 }} 
                    animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? -150 : 150, opacity: 0 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg leading-relaxed tracking-tight max-w-2xl text-center font-bold text-slate-50 md:text-xl">
              Access, track, and share your medical reports anytime secure & hassle-free health management.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              onClick={handleGetStarted}
              className="bg-white text-medivault-blue hover:bg-white/90 px-8 py-7 text-xl rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2"
            >
              <Lock size={22} />
              Unlock Your Vault for Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroDemo() {
  return <div className="block">
      <Hero />
    </div>;
}

export { Hero, HeroDemo };
