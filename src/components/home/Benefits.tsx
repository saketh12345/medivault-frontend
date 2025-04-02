
import FeatureIcon from "@/components/ui/feature-icon";
import { Clock, FileText, ShieldCheck } from "lucide-react";
import { Zap } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-[#f1f5f9]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All your health reports, securely stored and instantly accessible
            —no hassle, no delays.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-24 mt-16">
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-12">
              <FileText className="w-12 h-12 stroke-[1.5]" />
            </FeatureIcon>
            <h3 className="text-2xl font-bold mb-2">Organized</h3>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-12">
              <Clock className="w-12 h-12 stroke-[1.5]" />
            </FeatureIcon>
            <h3 className="text-2xl font-bold mb-2">Instant Access</h3>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-12">
              <Zap className="w-12 h-12 stroke-[1.5]" />
            </FeatureIcon>
            <h3 className="text-2xl font-bold mb-2">Fast & Hassle-Free</h3>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <FeatureIcon className="mb-12">
              <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
            </FeatureIcon>
            <h3 className="text-2xl font-bold mb-2">Secure & Private</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
