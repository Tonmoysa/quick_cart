import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
