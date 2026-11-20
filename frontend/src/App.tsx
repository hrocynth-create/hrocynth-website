import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Innovation from "./pages/Innovation";
import Ventures from "./pages/Ventures";
import Government from "./pages/Government";
import GlobalApproach from "./pages/GlobalApproach";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function PageMeta() {
  const location = useLocation();
  useEffect(() => {
    const titles: Record<string,string> = {
      "/":"HROCYNTH | Shaping Intelligent Futures",
      "/about":"About HROCYNTH | Vision, Purpose & Values",
      "/leadership":"Leadership | HROCYNTH",
      "/solutions":"Technology & Consulting Solutions | HROCYNTH",
      "/industries":"Industries We Serve | HROCYNTH",
      "/innovation":"Innovation & AI | HROCYNTH",
      "/ventures":"Ventures & Partnerships | HROCYNTH",
      "/government":"Government & Public Sector | HROCYNTH",
      "/global-approach":"Our Global Approach | HROCYNTH",
      "/contact":"Contact HROCYNTH",
    };
    document.title = titles[location.pathname] ?? "HROCYNTH";
  }, [location.pathname]);
  return null;
}

export default function App() {
  return <>
    <PageMeta/>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/leadership" element={<Leadership/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/innovation" element={<Innovation/>}/>
        <Route path="/ventures" element={<Ventures/>}/>
        <Route path="/government" element={<Government/>}/>
        <Route path="/global-approach" element={<GlobalApproach/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </>;
}
