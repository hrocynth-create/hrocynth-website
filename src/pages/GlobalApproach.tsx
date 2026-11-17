import { ArrowRight, Search, PencilRuler, RefreshCw, Expand, Flag } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { approach } from "../data/site";

const icons = [Search,PencilRuler,RefreshCw,Expand,Flag];
export default function GlobalApproach() {
  return <>
    <PageHero eyebrow="OUR GLOBAL APPROACH" title="Where Complexity Finds Direction." highlight="From ambitious thinking to consequential action." text="We bring strategy, technology and execution into one connected discipline. By understanding the forces shaping industries and institutions, we design purposeful solutions, build capabilities and turn complex ambitions into tangible progress—with the integrity to stand behind every outcome." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="THE HROCYNTH FRAMEWORK" title="Five stages. One connected journey." text="Each stage builds on the last, creating clarity, alignment and momentum throughout the transformation journey."/></div><div className="container journey-list">{approach.map((step,i)=>{const Icon=icons[i];return <Reveal key={step.title}><article className="journey-row"><div className="journey-number">{step.number}</div><div className="journey-icon"><Icon/></div><div className="journey-copy"><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight className="journey-arrow"/></article></Reveal>})}</div></section>
    <section className="section section-navy"><div className="container"><SectionHeading eyebrow="OUR COMMITMENT" title="Transformation measured by the value it creates" text="We measure success not by the solutions we deliver, but by the transformation we enable."/></div><div className="container commitment-grid"><div><span>01</span><h3>Strategic alignment</h3><p>Connect initiatives with organizational priorities and intended outcomes.</p></div><div><span>02</span><h3>Purposeful execution</h3><p>Translate plans into coordinated action, capability and adoption.</p></div><div><span>03</span><h3>Sustainable value</h3><p>Focus on resilience, operational excellence and meaningful growth.</p></div></div></section>
    <CTA title="Let's define your next horizon."/>
  </>;
}
