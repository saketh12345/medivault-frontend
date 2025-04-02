
import FeatureIcon from "@/components/ui/feature-icon";
import { FileText, Share } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 px-4 bg-[#f8fafc]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless Health Report Management in 3 Simple Steps
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-16 items-start">
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-10">
              <FileText className="w-10 h-10 stroke-2" />
            </FeatureIcon>
            <h3 className="text-xl font-bold mb-2">Upload Reports</h3>
            <p className="text-gray-600">Labs securely upload test reports.</p>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-10">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12L13 12M21 6L13 6M21 18H13M6 18L8 20L12 16M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5ZM9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </FeatureIcon>
            <h3 className="text-xl font-bold mb-2">Instant Access</h3>
            <p className="text-gray-600">View your reports anytime from your phone</p>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-10">
              <Share className="w-10 h-10 stroke-2" />
            </FeatureIcon>
            <h3 className="text-xl font-bold mb-2">Easy Sharing</h3>
            <p className="text-gray-600">Download or share reports effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
