
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-16 bg-medivault-blue text-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to manage your health reports effortlessly?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of users who have simplified their health record management with MediVault.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register?role=patient">
            <Button className="bg-white text-medivault-blue hover:bg-white/90 px-6 py-6 text-lg">
              Get Started as Patient
            </Button>
          </Link>
          <Link to="/register?role=lab">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
              Register as Diagnostic Center
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
