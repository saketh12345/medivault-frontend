
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, MessageCircle, Mail } from "lucide-react";
import NavigationWrapper from "./NavigationWrapper";

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const path = location.pathname;
    if (path.includes('/about')) return 'About';
    if (path.includes('/contact')) return 'Contact';
    return 'Home';
  });
  
  // Update active item when location changes
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/about')) setActiveItem('About');
    else if (path.includes('/contact')) setActiveItem('Contact');
    else setActiveItem('Home');
  }, [location.pathname]);
  
  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: MessageCircle,
      label: "About",
      href: "/about",
    },
    {
      icon: Mail,
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className={`py-4 w-full ${location.pathname === '/' ? 'bg-transparent' : 'bg-medivault-blue'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MediVault
        </Link>
        
        <div className="flex space-x-6 items-center">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === activeItem;
              
              return (
                <li key={item.label}>
                  <Link 
                    to={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-300 ${
                      isActive 
                        ? 'text-white bg-blue-600/20' 
                        : 'text-gray-300 hover:text-white hover:bg-blue-600/10'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : 'text-gray-300'}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
