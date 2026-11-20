import { Handshake, Rocket, Lightbulb, Network, Compass, TrendingUp } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";

const ventureItems = [
  {icon:Rocket,title:"Technology Ventures",text:"Explore new opportunities where technology can address meaningful business and societal needs."},
  {icon:Handshake,title:"Strategic Partnerships",text:"Build collaborative relationships that combine complementary strengths and expertise."},
  {icon:Lightbulb,title:"Startup Collaboration",text:"Engage with emerging ideas, entrepreneurial teams and new models of innovation."},
  {icon:Network,title:"Innovation Ecosystem",text:"Connect capabilities, perspectives and partners to accelerate promising opportunities."},
  {icon:Compass,title:"Venture Exploration",text:"Evaluate opportunities with strategic clarity, disciplined thinking and purposeful experimentation."},
  {icon:TrendingUp,title:"Sustainable Growth",text:"Focus on long-term value creation and responsible pathways to scale."},
];
export default function Ventures() {
  return <>
    <PageHero eyebrow="VENTURES & PARTNERSHIPS" title="Where ideas find" highlight="room to grow." text="We believe progress happens when ambition, expertise and collaboration come together. Our venture philosophy is grounded in exploring opportunities and building meaningful partnerships." image="/assets/images/hero-city.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="OUR VENTURE PHILOSOPHY" title="A collaborative ecosystem for possibility" text="The venture ecosystem is a space for exploring new ideas, strategic relationships and opportunities for purposeful innovation."/></div><div className="container card-grid card-grid-3">{ventureItems.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.title}><article className="info-card venture-card"><span className="icon-box"><Icon/></span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>})}</div></section>
    <section className="section section-navy"><div className="container split-copy"><div><span className="eyebrow eyebrow-light">PARTNER WITH US</span><h2>Better outcomes begin with <em>shared ambition.</em></h2></div><div><p className="lead">We welcome conversations with organizations, founders and collaborators who share an interest in building thoughtful, future-ready solutions.</p><p>Specific venture programs, investments and active partnerships will be published as they are formally established and approved for announcement.</p></div></div></section>
    <CTA title="Have an idea worth exploring?" text="Start a conversation about collaboration, partnership or a new opportunity."/>
  </>;
}
