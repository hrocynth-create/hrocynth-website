import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}} transition={{duration: 0.3}}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
