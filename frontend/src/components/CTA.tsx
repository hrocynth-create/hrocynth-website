import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA({ title = "Let's create what comes next.", text = "Bring us your ambition. Together, we can turn possibility into progress." }: {title?: string; text?: string}) {
  return <section className="cta-band"><div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><div className="container cta-inner">
    <div><span className="eyebrow eyebrow-light">BUILD TOMORROW WITH HROCYNTH</span><h2>{title}</h2><p>{text}</p></div>
    <Link className="button button-white" to="/contact">Start a Conversation <ArrowUpRight size={17}/></Link>
  </div></section>;
}
