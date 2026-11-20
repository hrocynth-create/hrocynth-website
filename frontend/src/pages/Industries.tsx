import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { IndustryCard } from "../components/Cards";
import CTA from "../components/CTA";
import { industries } from "../data/site";

export default function Industries() {
  return <>
    <PageHero eyebrow="INDUSTRIES WE SERVE" title="Insight shaped by industry." highlight="Impact designed for you." text="Our expertise spans multiple sectors, enabling us to address industry-specific challenges while delivering innovative, scalable and future-ready solutions." image="/assets/images/earth-horizon.jpg"/>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="SECTOR EXPERIENCE" title="Creating impact across industries" text="We bring cross-industry perspectives together with a practical understanding of the environments in which organizations operate."/></div><div className="container card-grid card-grid-5">{industries.map((item,i)=><IndustryCard key={item.title} item={item} index={i}/>)}</div></section>
    <section className="section section-blue"><div className="container split-copy"><div><span className="eyebrow">A CONNECTED PERSPECTIVE</span><h2 className="industry-principle-title"><span>Tech with a spine.</span><span>Work with a purpose.</span><span><em>We ship with integrity.</em></span></h2></div><p className="lead">The best solutions respect the realities of your industry and the bigger forces reshaping business. We bring both views together, and we’re honest about the trade-offs, so your organization can decide with confidence.</p></div></section>
    <CTA title="Your ambition deserves a partner with a spine. Let’s build something worth standing behind." text="Bring the ambition. We’ll bring the integrity."/>

  </>;
}
