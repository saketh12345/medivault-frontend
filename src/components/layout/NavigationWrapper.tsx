
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface NavigationWrapperProps {
  href: string;
  children: ReactNode;
}

const NavigationWrapper = ({ href, children }: NavigationWrapperProps) => {
  return (
    <Link to={href} className="no-underline text-white hover:text-white">
      {children}
    </Link>
  );
};

export default NavigationWrapper;
