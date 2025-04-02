
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-medivault-blue text-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2">MediVault</h3>
          <p>Simplifying Health Report Management</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/about" className="hover:underline">About Us</Link>
          <span>|</span>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
        
        <div className="text-center text-sm">
          <p>support@medivault.com | +91 7075604832</p>
          <p className="mt-2">© {new Date().getFullYear()} MediVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
