
import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type DashboardLayoutProps = {
  children: ReactNode;
  userType: "patient" | "lab";
};

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();

  const LogoutButton = () => (
    <Link to="/login" className="ml-auto">
      <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <LogOut size={18} />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </Link>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-0 left-0 right-0 h-16 bg-white z-40 flex items-center justify-between px-4 border-b">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <DashboardSidebar userType={userType} />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-semibold ml-2">MediVault</h1>
          </div>
          <LogoutButton />
        </div>
        <div className="pt-20 px-4 pb-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar userType={userType} />
      <div className="ml-64 p-8 relative">
        <div className="absolute top-0 right-0 p-4">
          <LogoutButton />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
