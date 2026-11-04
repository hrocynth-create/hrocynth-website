import { ArrowUpRight, Linkedin, Mail, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"/>
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Brand />
          <p>Where Vision Meets The Horizon Of Possibility.</p>
          <span className="footer-philosophy">Elevate. Innovate. Transform.</span>
        </div>
        <div className="footer-col"><h4>Explore</h4><Link to="/about">About HROCYNTH</Link><Link to="/leadership">Leadership</Link><Link to="/ventures">Ventures</Link><Link to="/government">Government</Link></div>
        <div className="footer-col"><h4>Capabilities</h4><Link to="/solutions">Our Solutions</Link><Link to="/industries">Industries</Link><Link to="/innovation">Innovation & AI</Link><Link to="/global-approach">Global Approach</Link></div>
        <div className="footer-col"><h4>Connect</h4><Link to="/contact">Contact Us <ArrowUpRight size={14}/></Link><a href="mailto:hello@hrocynth.com"><Mail size={14}/> Business Enquiries</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={14}/> LinkedIn</a><span><Globe2 size={14}/> Creating Intelligent Futures</span></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} HROCYNTH. All Rights Reserved.</span>
        <span>Transforming Ambition into Impact.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
