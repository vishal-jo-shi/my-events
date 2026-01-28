import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

export default function Main() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <main className="min-h-[calc(100vh-128px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
