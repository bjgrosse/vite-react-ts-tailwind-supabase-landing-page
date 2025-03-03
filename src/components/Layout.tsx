import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/theme.css";

interface LayoutProps {
  showNavbar?: boolean;
}

const Layout = ({ showNavbar = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-theme="purple">
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
