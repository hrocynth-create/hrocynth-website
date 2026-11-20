import { ArrowRight, Eye, Goal, Compass, ShieldCheck, Lightbulb, Users, Leaf, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { company, principles, values } from "../data/site";

export default function About() {
  const icons = [Eye, Lightbulb, Award, ShieldCheck, Users, Leaf];
  return <>
    <PageHero eyebrow="ABOUT HROCYNTH" title="A vision for progress." highlight="A purpose for impact." text="We partner with enterprises, governments, institutions and emerging businesses to solve complex challenges and create measurable outcomes." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-white"><div className="container story-grid"><Reveal><span className="eyebrow">WHO WE ARE</span><h2>We help organizations move confidently into what comes next.</h2></Reveal><Reveal delay={.1}><p className="lead">At HROCYNTH, we believe that every transformative journey begins with a bold vision and reaches its full potential through purposeful execution.</p><p>Founded on the principles of innovation, excellence and trust, we partner with organizations to navigate complexity, embrace change and lead confidently into the future.</p><p>Our multidisciplinary expertise spans technology, consulting, digital transformation, artificial intelligence, business strategy and enterprise innovation. We do not simply deliver solutions; we help organizations build resilience and unlock their full potential.</p></Reveal></div></section>
    <section className="section section-soft"><div className="container three-pillars">
      {[{icon:Goal,title:"Our Purpose",text:company.purpose},{icon:Eye,title:"Our Vision",text:company.vision},{icon:Compass,title:"Our Mission",text:company.mission}].map((x,i)=>{const Icon=x.icon;return <Reveal key={x.title} delay={i*.08}><article className="pillar-card"><span className="icon-box"><Icon/></span><h3>{x.title}</h3><p>{x.text}</p></article></Reveal>})}
    </div></section>
    <section className="section section-navy"><div className="container"><SectionHeading eyebrow="WHAT WE STAND FOR" title="A philosophy built on purposeful progress" text="Our principles are more than statements. They are the standards that guide our decisions, relationships and delivery."/></div><div className="container card-grid card-grid-3">{principles.map((p,i)=>{const Icon=icons[i];return <Reveal key={p.title} delay={i*.06}><article className="principle-card"><span className="principle-number">0{i+1}</span><Icon size={25}/><h3>{p.title}</h3><p>{p.text}</p></article></Reveal>})}</div></section>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="COMPANY PHILOSOPHY" title="Think beyond. Build beyond. Lead beyond." centered/></div><div className="container philosophy-grid">{[{a:"Vision",b:"See Beyond."},{a:"Strategy",b:"Think Beyond."},{a:"Innovation",b:"Build Beyond."},{a:"Transformation",b:"Lead Beyond."},{a:"Excellence",b:"Achieve Beyond."}].map((x,i)=><Reveal key={x.a}><div className="philosophy-item"><span>0{i+1}</span><h3>{x.a}</h3><p>{x.b}</p></div></Reveal>)}</div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="CORPORATE VALUES" title="What we believe shapes what we build" centered/></div><div className="container values-grid">{values.map((v,i)=>{const Icon=v.icon;return <Reveal key={v.title}><div className="value-card"><Icon size={23}/><h3>{v.title}</h3><p>{v.text}</p></div></Reveal>})}</div></section>
    <CTA title="Let's turn a bold vision into meaningful progress."/>
  </>;
}
