import { Landmark, Building2, Users, Network, ShieldCheck, Workflow } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";

const areas = [
  {icon:Landmark,title:"Digital Governance",text:"Support more connected, accessible and effective public services through thoughtful digital enablement."},
  {icon:Building2,title:"Smart Cities",text:"Explore integrated technology approaches for urban services, infrastructure and city experiences."},
  {icon:Users,title:"Citizen-Centric Services",text:"Put the needs and experiences of citizens at the center of service design and delivery."},
  {icon:Network,title:"Digital Public Infrastructure",text:"Consider interoperable platforms and connected systems that support public value."},
  {icon:ShieldCheck,title:"Trust, Security & Resilience",text:"Build awareness of security, privacy, continuity and responsible technology practices."},
  {icon:Workflow,title:"Institutional Transformation",text:"Modernize processes, capabilities and operating models to support sustainable change."},
];
export default function Government() {
  return <>
    <PageHero eyebrow="GOVERNMENT & PUBLIC SECTOR" title="Digital foundations for institutions that serve the public, " highlight="not just the system." text="We partner with governments and public agencies worldwide to modernize services, strengthen continuity, and build resilience that holds under pressure, using secure, responsible technology that earns the trust of the communities they serve." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="PUBLIC SECTOR CAPABILITIES" title="PUBLIC SECTOR CAPABILITIES Govern. Transform. Strengthen." text="We deliver digital governance, service transformation, and the technology foundations that public institutions depend on."/></div><div className="container card-grid card-grid-3">{areas.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.title}><article className="info-card"><span className="icon-box"><Icon/></span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>})}</div></section>
    <section className="section section-blue"><div className="container split-copy"><div><span className="eyebrow">A RESPONSIBLE APPROACH</span><h2>Innovation grounded in <em>trust and purpose.</em></h2></div><p className="lead">Public-sector transformation requires an understanding of institutions, communities, governance and long-term responsibility. We approach these opportunities with an emphasis on collaboration, transparency and meaningful outcomes.</p></div></section>
    <CTA title="Build Something Worth Standing Behind With HROCYNTH" text="Bring the ambition. We’ll bring the integrity."/>
  </>;
}
