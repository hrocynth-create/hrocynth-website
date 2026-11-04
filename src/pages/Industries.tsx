import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { IndustryCard } from "../components/Cards";
import CTA from "../components/CTA";
import { industries } from "../data/site";

export default function Industries() {
  return <>
    <PageHero eyebrow="INDUSTRIES WE SERVE" title="Insight shaped by industry." highlight="Impact designed for you." text="Our expertise spans multiple sectors, enabling us to address industry-specific challenges while delivering innovative, scalable and future-ready solutions." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="SECTOR EXPERIENCE" title="Creating impact across industries" text="We bring cross-industry perspectives together with a practical understanding of the environments in which organizations operate."/></div><div className="container card-grid card-grid-5">{industries.map((item,i)=><IndustryCard key={item.title} item={item} index={i}/>)}</div></section>
    <section className="section section-blue"><div className="container split-copy"><div><span className="eyebrow">A CONNECTED PERSPECTIVE</span><h2>Industry context.<br/><em>Enterprise thinking.</em></h2></div><p className="lead">The most effective solutions reflect both the unique realities of an industry and the broader forces reshaping business. We bring those perspectives together to help organizations make confident decisions.</p></div></section>
    <CTA title="Let's explore the opportunities in your industry."/>
  </>;
}
