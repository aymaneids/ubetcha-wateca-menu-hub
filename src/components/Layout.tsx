import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;