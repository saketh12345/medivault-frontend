
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  children: React.ReactNode;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        "bg-[#3b82f6] text-white rounded-full w-36 h-36 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg", 
        className
      )}
    >
      {children}
    </div>
  );
};

export default FeatureIcon;
