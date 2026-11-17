import { BrainCircuit, Cloud, BarChart3, Workflow, ShieldCheck, Leaf, Network, Cpu } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { innovationAreas } from "../data/site";

const icons = [BrainCircuit,Cloud,BarChart3,Workflow,ShieldCheck,Network,Cpu,Leaf];
export default function Innovation() {
  return <>
    <PageHero className="innovation-hero" eyebrow="INNOVATION & AI" title="Innovation isn’t a team." highlight="It’s a habit. Skip the hype. Ship the future." text="We apply emerging technology to complex enterprise challenges, validate it at scale, and deliver it with integrity across every market you operate in." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-navy innovation-intro"><div className="container innovation-split"><Reveal><div><span className="eyebrow eyebrow-light">THE INNOVATION ECOSYSTEM</span><h2>THE INNOVATION ECOSYSTEM <em>Elevate. Innovate. Transform.</em></h2><p className="lead">We strengthen enterprise technology foundations, introduce emerging technology with discipline, and lead transformation that delivers measurable value everywhere you operate.</p></div></Reveal><Reveal delay={.12}><div className="innovation-orbit"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit-core"><img src="/assets/brand/hrocynth-symbol-transparent.png" alt="HROCYNTH symbol"/></div><span className="orbit-dot dot-a"/><span className="orbit-dot dot-b"/><span className="orbit-dot dot-c"/></div></Reveal></div></section>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="OUR INNOVATION ECOSYSTEM" title="Eight connected areas of exploration" text="Together, these capabilities help organizations transform ideas into relevant, responsible and scalable outcomes."/></div><div className="container innovation-grid">{innovationAreas.map((area,i)=>{const Icon=icons[i];return <Reveal key={area} delay={i*.05}><div className="innovation-card"><span className="icon-box"><Icon/></span><span className="card-index">0{i+1}</span><h3>{area}</h3><p>Explore opportunities, build capability and apply innovation with purpose.</p></div></Reveal>})}</div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="OUR BELIEF" title="Technology should be judged by what it leaves behind." centered text="We look beyond novelty to solutions that are relevant, widely adopted, responsibly built, and valuable for the long term, in every market we serve."/></div><div className="container three-pillars"><article className="pillar-card"><BrainCircuit/><h3>Explore</h3><p>Understand emerging technologies and where they can create genuine value.</p></article><article className="pillar-card"><Workflow/><h3>Apply</h3><p>Design practical solutions that connect technology with real business needs.</p></article><article className="pillar-card"><BarChart3/><h3>Advance</h3><p>Learn, adapt and scale innovation through continuous improvement.</p></article></div></section>
    <CTA title="Let's turn your next idea into meaningful progress."/>
  </>;
}
