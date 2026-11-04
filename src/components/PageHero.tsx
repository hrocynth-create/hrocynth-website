import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, highlight, text, image, dark = true }: {
  eyebrow: string; title: string; highlight?: string; text: string; image?: string; dark?: boolean;
}) {
  return <section className={`page-hero ${dark ? "page-hero-dark" : "page-hero-light"}`} style={image ? {backgroundImage: `linear-gradient(90deg, rgba(4,14,30,.94), rgba(4,14,30,.7) 56%, rgba(4,14,30,.25)), url(${image})`} : undefined}>
    <div className="container page-hero-content"><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title} {highlight && <em>{highlight}</em>}</h1><p>{text}</p><Link className="text-link text-link-light" to="/contact">Talk to our team <ArrowRight size={17}/></Link></div>
  </section>;
}
