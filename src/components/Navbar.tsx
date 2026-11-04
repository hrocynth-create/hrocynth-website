import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { navItems } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => item.children ? (
            <div className="nav-dropdown" key={item.label}>
              <button className="nav-link nav-trigger" onClick={() => setExpanded(expanded === item.label ? null : item.label)}>
                {item.label}<ChevronDown size={14} />
              </button>
              {expanded === item.label && <div className="dropdown-panel">
                {item.children.map(child => <Link key={child.href} to={child.href} onClick={() => setExpanded(null)}>{child.label}<ArrowUpRight size={14}/></Link>)}
              </div>}
            </div>
          ) : <NavLink key={item.href} to={item.href} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>{item.label}</NavLink>)}
        </nav>
        <Link to="/contact" className="nav-cta">Let's Talk <ArrowUpRight size={16}/></Link>
        <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="mobile-menu">
        {navItems.map(item => <div key={item.label}>
          <Link to={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          {item.children?.map(child => <Link className="mobile-sub" key={child.href} to={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}
        </div>)}
        <Link className="mobile-menu-cta" to="/contact" onClick={() => setOpen(false)}>Let's Talk <ArrowUpRight size={16}/></Link>
      </div>}
    </header>
  );
}
