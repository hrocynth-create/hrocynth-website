import { ArrowRight, ArrowUpRight, Sparkles, Compass, Target, ShieldCheck, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero3D from "../components/Hero3D";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard, IndustryCard } from "../components/Cards";
import CTA from "../components/CTA";
import { company, capabilities, industries, principles, approach, values } from "../data/site";

export default function Home() {
  return <>
    <section className="home-hero" id="top">
      <div className="hero-image-layer"/>
      <div className="hero-grid"/>
      <div className="container home-hero-inner">
        <div className="hero-copy">
          <motion.span className="eyebrow eyebrow-light" initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}>INNOVATION <i/> TECHNOLOGY <i/> TOMORROW</motion.span>
          <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.25}}>Shaping<br/>Intelligent <em>Futures.</em></motion.h1>
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.42}}>{company.heroDescription}</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.55}}>
            <Link className="button button-primary" to="/solutions">Explore Our Solutions <ArrowRight size={17}/></Link>
            <Link className="button button-outline" to="/contact">Partner With Us <ArrowUpRight size={17}/></Link>
          </motion.div>
          <div className="hero-note"><span className="note-line"/> <span>{company.philosophy}</span></div>
        </div>
        <Hero3D/>
      </div>
      <div className="hero-bottom container"><span>STRATEGY</span><span>TECHNOLOGY</span><span>TRANSFORMATION</span><span className="hero-scroll">SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="section section-white intro-section">
      <div className="container intro-grid">
        <Reveal><div className="intro-mark"><img src="/assets/brand/hrocynth-symbol-light.jpg" alt="HROCYNTH symbol"/><span>H</span></div></Reveal>
        <Reveal delay={.1}><div><span className="eyebrow">THE HROCYNTH PERSPECTIVE</span><h2>Vision creates possibility.<br/><em>Execution creates impact.</em></h2><p className="lead">{company.purpose}</p><p>We combine strategic insight, advanced technologies and human ingenuity to help businesses reimagine possibilities, unlock growth and achieve enduring success in an ever-evolving world.</p><Link className="text-link" to="/about">Discover who we are <ArrowRight size={17}/></Link></div></Reveal>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container"><SectionHeading eyebrow="WHAT WE DO" title="Capabilities that move business forward" text="We bring strategy, technology and execution together to help organizations solve complex challenges and create measurable outcomes."/></div>
      <div className="container card-grid card-grid-3">{capabilities.slice(0,6).map((item,i)=><ServiceCard key={item.title} item={item} index={i}/>)}</div>
      <div className="container section-action"><Link className="button button-dark" to="/solutions">Explore all capabilities <ArrowRight size={17}/></Link></div>
    </section>

    <section className="section section-navy">
      <div className="container"><SectionHeading eyebrow="INDUSTRY EXPERTISE" title="Creating impact across industries" text="Our multidisciplinary expertise helps address sector-specific challenges with innovative, scalable and future-ready solutions."/></div>
      <div className="container card-grid card-grid-5">{industries.slice(0,5).map((item,i)=><IndustryCard key={item.title} item={item} index={i}/>)}</div>
      <div className="container section-action"><Link className="button button-outline-light" to="/industries">Explore industries <ArrowRight size={17}/></Link></div>
    </section>

    <section className="section section-white">
      <div className="container split-feature">
        <Reveal><div className="feature-visual">
          <div className="feature-visual-bg"/>
          <div className="feature-visual-content"><span className="feature-kicker">OUR PROMISE</span><div className="feature-ring"><Sparkles size={42}/></div><h3>Transforming ambition<br/>into <em>impact.</em></h3><span className="feature-caption">INNOVATION · EXCELLENCE · EXECUTION</span></div>
        </div></Reveal>
        <Reveal delay={.12}><div className="feature-copy"><span className="eyebrow">WHY HROCYNTH</span><h2>More than solutions.<br/><em>A partner in progress.</em></h2><p className="lead">The world's most successful organizations do not compete solely on technology. They compete on vision, adaptability, innovation and execution.</p><div className="mini-principles">{principles.slice(0,3).map((p,i)=><div key={p.title}><span>0{i+1}</span><div><h4>{p.title}</h4><p>{p.text}</p></div></div>)}</div><Link className="text-link" to="/about">Discover our difference <ArrowRight size={17}/></Link></div></Reveal>
      </div>
    </section>

    <section className="section section-blue">
      <div className="container"><SectionHeading eyebrow="HOW WE WORK" title="A clear path from possibility to progress" text="Our global approach brings structure to transformation, from the first discovery conversation through long-term growth."/></div>
      <div className="container approach-track">{approach.map((step,i)=><Reveal key={step.title} delay={i*.08}><div className="approach-step"><span>{step.number}</span><div className="approach-node"/><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</div>
      <div className="container section-action"><Link className="button button-dark" to="/global-approach">Explore our approach <ArrowRight size={17}/></Link></div>
    </section>

    <section className="section section-white">
      <div className="container"><SectionHeading eyebrow="WHAT GUIDES US" title="Principles that shape every partnership" centered text="Our values influence how we think, how we work and the impact we aim to create."/></div>
      <div className="container values-grid">{values.map((v,i)=>{const Icon=v.icon;return <Reveal key={v.title} delay={i*.05}><div className="value-card"><Icon size={23}/><h3>{v.title}</h3><p>{v.text}</p></div></Reveal>})}</div>
    </section>

    <section className="earth-banner"><div className="earth-banner-overlay"/><div className="container earth-banner-content"><span className="eyebrow eyebrow-light">CREATING INTELLIGENT FUTURES</span><h2>Build tomorrow with<br/><em>intelligence, innovation and purpose.</em></h2><Link className="button button-primary" to="/innovation">Explore our innovation <ArrowRight size={17}/></Link></div></section>
    <CTA title="The future is not something to wait for. It is something to create." text="Let's explore what is possible when vision meets action."/>
  </>;
}
