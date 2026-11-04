import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard } from "../components/Cards";
import CTA from "../components/CTA";
import { capabilities } from "../data/site";

export default function Solutions() {
  return <>
    <PageHero eyebrow="OUR CAPABILITIES" title="Technology with purpose." highlight="Transformation with impact." text="We combine strategic thinking, digital innovation and industry expertise to solve complex challenges and unlock new opportunities for growth." image="/assets/images/hero-city.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="WHAT WE DO" title="Capabilities for a changing world" text="Explore our multidisciplinary capabilities, designed to help organizations move from ambition to execution."/></div><div className="container card-grid card-grid-3">{capabilities.map((item,i)=><ServiceCard key={item.title} item={item} index={i}/>)}</div></section>
    <section className="section section-soft"><div className="container split-copy"><div><span className="eyebrow">OUR APPROACH</span><h2>Strategy, technology and people—<em>working together.</em></h2></div><div><p className="lead">Sustainable transformation requires more than isolated technology initiatives.</p><p>We connect business objectives with practical roadmaps, thoughtful design and disciplined execution. Our focus is on building capabilities that last and outcomes that matter.</p></div></div></section>
    <CTA title="Find the right capability for your next challenge." text="Tell us where you want to go. We can explore the path forward together."/>
  </>;
}
