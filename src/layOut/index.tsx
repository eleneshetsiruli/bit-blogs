import { Outlet } from "react-router-dom";
import { NavBar } from "@/pages/home/navBar";
import { Footer } from "@/components/footer";

export const LayOut = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
