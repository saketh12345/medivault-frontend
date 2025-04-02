
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Settings } from "lucide-react";

type SidebarProps = {
  userType: "patient" | "lab";
};

const DashboardSidebar = ({ userType }: SidebarProps) => {
  const location = useLocation();
  const basePath = userType === "patient" ? "/patient" : "/lab";
  
  const patientLinks = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Settings", path: "/settings", icon: Settings },
  ];
  
  const labLinks = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Settings", path: "/settings", icon: Settings },
  ];
  
  const links = userType === "patient" ? patientLinks : labLinks;

  return (
    <aside className="bg-white border-r w-64 min-h-screen p-4 fixed left-0 top-0">
      <div className="flex items-center mb-8 pt-2">
        <Link to="/" className="text-2xl font-bold text-medivault-blue">
          MediVault
        </Link>
      </div>
      
      <nav className="space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === `${basePath}${link.path}`;
          return (
            <Link
              key={link.path}
              to={`${basePath}${link.path}`}
              className={cn(
                "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                isActive 
                  ? "bg-medivault-blue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <link.icon size={18} className="mr-3" />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
