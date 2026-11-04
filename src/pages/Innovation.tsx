import { BrainCircuit, Cloud, BarChart3, Workflow, ShieldCheck, Leaf, Network, Cpu } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { innovationAreas } from "../data/site";

const icons = [BrainCircuit,Cloud,BarChart3,Workflow,ShieldCheck,Network,Cpu,Leaf];
export default function Innovation() {
  return <>
    <PageHero eyebrow="INNOVATION & AI" title="Innovation is how" highlight="tomorrow takes shape." text="Innovation is not a department. It is a mindset embedded across every engagement—connecting emerging technologies with meaningful business outcomes." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-navy innovation-intro"><div className="container innovation-split"><Reveal><div><span className="eyebrow eyebrow-light">THE INNOVATION ECOSYSTEM</span><h2>From emerging possibility to <em>practical progress.</em></h2><p className="lead">We combine technology exploration, strategic thinking and purposeful execution to help organizations translate ideas into measurable outcomes.</p></div></Reveal><Reveal delay={.12}><div className="innovation-orbit"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit-core"><img src="/assets/brand/hrocynth-symbol-light.jpg" alt="HROCYNTH symbol"/></div><span className="orbit-dot dot-a"/><span className="orbit-dot dot-b"/><span className="orbit-dot dot-c"/></div></Reveal></div></section>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="OUR INNOVATION ECOSYSTEM" title="Eight connected areas of exploration" text="Together, these capabilities help organizations transform ideas into relevant, responsible and scalable outcomes."/></div><div className="container innovation-grid">{innovationAreas.map((area,i)=>{const Icon=icons[i];return <Reveal key={area} delay={i*.05}><div className="innovation-card"><span className="icon-box"><Icon/></span><span className="card-index">0{i+1}</span><h3>{area}</h3><p>Explore opportunities, build capability and apply innovation with purpose.</p></div></Reveal>})}</div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="OUR BELIEF" title="Technology matters most when it creates meaningful change" centered text="We look beyond novelty to focus on relevance, adoption, responsibility and long-term value."/></div><div className="container three-pillars"><article className="pillar-card"><BrainCircuit/><h3>Explore</h3><p>Understand emerging technologies and where they can create genuine value.</p></article><article className="pillar-card"><Workflow/><h3>Apply</h3><p>Design practical solutions that connect technology with real business needs.</p></article><article className="pillar-card"><BarChart3/><h3>Advance</h3><p>Learn, adapt and scale innovation through continuous improvement.</p></article></div></section>
    <CTA title="Let's turn your next idea into meaningful progress."/>
  </>;
}
