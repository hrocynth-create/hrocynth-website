// import { Quote, ShieldCheck, Lightbulb, Users, Target, Compass, Award } from "lucide-react";
// import PageHero from "../components/PageHero";
// import SectionHeading from "../components/SectionHeading";
// import Reveal from "../components/Reveal";
// import CTA from "../components/CTA";
// import { leadershipRoles } from "../data/site";

// export default function Leadership() {
//   const principles = [{icon:ShieldCheck,title:"Lead with Integrity"},{icon:Lightbulb,title:"Inspire Innovation"},{icon:Users,title:"Empower People"},{icon:Target,title:"Drive Transformation"},{icon:Award,title:"Deliver Excellence"},{icon:Compass,title:"Create Sustainable Value"}];
//   return <>
//     <PageHero eyebrow="LEADERSHIP" title="Leadership driven" highlight="by vision." text="Our leadership philosophy brings together strategic insight, industry expertise and a shared commitment to innovation."/>
//     <section className="section section-white"><div className="container"><SectionHeading eyebrow="MESSAGES FROM OUR FOUNDERS" title="A shared belief in what is possible" text="The perspectives that shape the purpose and direction of HROCYNTH."/></div><div className="container founder-grid">
//       <Reveal><article className="founder-card"><div className="quote-mark"><Quote/></div><span className="eyebrow">FOUNDER'S MESSAGE</span><h2>Vision creates possibility. Execution creates impact.</h2><p>HROCYNTH was founded on a simple yet powerful belief: vision creates possibility and execution creates impact.</p><p>As industries evolve and technology reshapes the world around us, organizations require more than service providers; they need strategic partners capable of transforming ambition into achievement.</p><p>Our purpose is to help clients navigate uncertainty, embrace innovation and unlock their full potential. Every solution we design reflects our commitment to excellence, continuous innovation and measurable business value.</p><p>The future belongs to organizations that dare to imagine beyond today's limitations. Together, we are building that future.</p><strong>Founder & Chief Executive Officer</strong><small>Founder message supplied by HROCYNTH</small></article></Reveal>
//       <Reveal delay={.1}><article className="founder-card founder-card-blue"><div className="quote-mark"><Quote/></div><span className="eyebrow eyebrow-light">CO-FOUNDER'S MESSAGE</span><h2>Innovation thrives where collaboration, expertise and purpose intersect.</h2><p>As co-founders, we share a vision of building an organization that empowers businesses to adapt, evolve and lead in a rapidly changing world.</p><p>Our commitment extends beyond technology. We strive to create transformative experiences, foster meaningful partnerships and deliver solutions that generate lasting value.</p><p>Every challenge presents an opportunity to innovate. Every partnership presents an opportunity to create impact.</p><strong>Co-Founder & Chief Technology Officer</strong><small>Co-founder message supplied by HROCYNTH</small></article></Reveal>
//     </div></section>
//     <section className="section section-soft"><div className="container"><SectionHeading eyebrow="EXECUTIVE LEADERSHIP" title="Expertise aligned around a common purpose" text="Our leadership structure is designed to bring together strategic direction, operational excellence and technology innovation."/></div><div className="container role-grid">{leadershipRoles.map((role,i)=><Reveal key={role.short} delay={i*.05}><article className="role-card"><span>{role.short}</span><div><h3>{role.role}</h3><p>{role.text}</p></div></article></Reveal>)}</div><p className="container note-text">Individual names, portraits and biographies can be added when confirmed by the HROCYNTH leadership team.</p></section>
//     <section className="section section-navy"><div className="container"><SectionHeading eyebrow="LEADERSHIP PRINCIPLES" title="How we lead" centered/></div><div className="container leadership-principles">{principles.map((p,i)=>{const Icon=p.icon;return <Reveal key={p.title}><div><Icon/><span>0{i+1}</span><h3>{p.title}</h3></div></Reveal>})}</div></section>
//     <CTA title="Strong partnerships begin with shared direction."/>
//   </>;
// }

import {
  Quote,
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
  Compass,
  Award,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";

export default function Leadership() {
  const principles = [
    { icon: ShieldCheck, title: "Lead with Integrity" },
    { icon: Lightbulb, title: "Inspire Innovation" },
    { icon: Users, title: "Empower People" },
    { icon: Target, title: "Drive Transformation" },
    { icon: Award, title: "Deliver Excellence" },
    { icon: Compass, title: "Create Sustainable Value" },
  ];

  return (
    <>
      <PageHero
        eyebrow="LEADERSHIP"
        title="Leadership driven"
        highlight="by vision."
        text="Our leadership brings together vision, innovation and a shared commitment to building the future."
      />

      {/* FOUNDERS SECTION */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="OUR LEADERSHIP"
            title="Meet the people behind HROCYNTH"
            text="Driven by vision. United by purpose. Building a future through innovation and excellence."
          />
        </div>

        <div className="container founder-grid">

          {/* FOUNDER */}
          <Reveal>
          <article className="founder-card founder-card-blue">
              <img
                className="founder-photo"
                src="/assets/images/rohan-gopal-kolkar.jpg"
                alt="Rohan Gopal Kolkar - Founder of HROCYNTH"
              />

              <div className="quote-mark">
                <Quote />
              </div>

              <span className="eyebrow">FOUNDER</span>

              <h2>Rohan Gopal Kolkar</h2>

              <p>
                Building HROCYNTH with a vision to create meaningful
                impact through technology, innovation and excellence.
              </p>

              <strong>Founder</strong>
            </article>
          </Reveal>

          {/* CO-FOUNDER */}
          <Reveal delay={0.1}>
            <article className="founder-card founder-card-blue">
              <img
                className="founder-photo"
                src="/assets/images/shivanand-naganuri.jpg"
                alt="Shivanand Naganuri - Co-Founder of HROCYNTH"
              />

              <div className="quote-mark">
                <Quote />
              </div>

              <span className="eyebrow eyebrow-light">
                CO-FOUNDER
              </span>

              <h2>Shivanand Naganuri</h2>

              <p>
                Working towards innovative solutions, meaningful
                collaboration and a shared vision for the future.
              </p>

              <strong>Co-Founder</strong>
            </article>
          </Reveal>

        </div>
      </section>

      {/* LEADERSHIP PRINCIPLES */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="LEADERSHIP PRINCIPLES"
            title="How we lead"
            centered
          />
        </div>

        <div className="container leadership-principles">
          {principles.map((p, i) => {
            const Icon = p.icon;

            return (
              <Reveal key={p.title}>
                <div>
                  <Icon />
                  <span>0{i + 1}</span>
                  <h3>{p.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA title="Strong partnerships begin with shared direction." />
    </>
  );
}
