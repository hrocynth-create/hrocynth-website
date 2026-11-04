import {
  Activity, BrainCircuit, Building2, Cloud, Code2, Factory, GraduationCap,
  HeartPulse, Landmark, Leaf, LineChart, LockKeyhole, Network, Package,
  RadioTower, ShoppingBag, Sprout, Workflow, Zap,
} from "lucide-react";

export const company = {
  name: "HROCYNTH",
  tagline: "Where Vision Meets The Horizon Of Possibility",
  philosophy: "Elevate. Innovate. Transform.",
  promise: "Transforming ambition into impact through innovation, excellence and execution.",
  heroTitle: "Shaping Intelligent Futures",
  heroDescription:
    "HROCYNTH is a global technology, consulting and innovation enterprise that empowers organizations to navigate complexity, accelerate transformation and create sustainable value.",
  vision:
    "To become a globally respected leader in technology, innovation and strategic transformation—recognized for shaping a smarter, more connected and sustainable future.",
  mission:
    "To deliver transformative solutions that unite technology, strategy and human ingenuity, enabling organizations to unlock new possibilities and achieve extraordinary outcomes.",
  purpose:
    "To create lasting impact by empowering organizations to innovate boldly, transform intelligently and grow sustainably.",
};

export const values = [
  { title: "Vision", text: "We see opportunities where others see uncertainty.", icon: Activity },
  { title: "Innovation", text: "We challenge convention and create new possibilities.", icon: BrainCircuit },
  { title: "Excellence", text: "We pursue the highest standards without compromise.", icon: Zap },
  { title: "Integrity", text: "We earn trust through accountability and transparency.", icon: LockKeyhole },
  { title: "Collaboration", text: "We believe great outcomes are achieved together.", icon: Network },
  { title: "Impact", text: "We focus on creating measurable and meaningful results.", icon: LineChart },
];

export const principles = [
  { title: "Visionary Leadership", text: "We challenge conventional thinking and inspire progress through bold ideas and strategic foresight." },
  { title: "Innovation with Purpose", text: "Every innovation we pursue is designed to create measurable value and meaningful impact." },
  { title: "Excellence without Compromise", text: "We maintain the highest standards across every engagement, solution and partnership." },
  { title: "Integrity & Trust", text: "We build enduring relationships through transparency, accountability and ethical leadership." },
  { title: "Human-Centered Transformation", text: "Technology succeeds when it empowers people, organizations and communities." },
  { title: "Sustainable Growth", text: "We create solutions that generate long-term value and responsible progress." },
];

export const capabilities = [
  { title: "Technology Consulting", icon: Code2, text: "Align technology decisions with business priorities through practical insight, architecture and execution roadmaps.", tags: ["Technology strategy", "Architecture advisory", "Modernization"] },
  { title: "Digital Transformation", icon: Workflow, text: "Reimagine operating models, experiences and processes to create resilient, digitally enabled organizations.", tags: ["Transformation strategy", "Process redesign", "Change enablement"] },
  { title: "Artificial Intelligence & Automation", icon: BrainCircuit, text: "Apply AI and intelligent automation to improve decisions, accelerate workflows and unlock new opportunities.", tags: ["Generative AI", "Machine learning", "Intelligent automation"] },
  { title: "Enterprise Applications", icon: Building2, text: "Design and connect enterprise platforms that simplify operations and support business growth.", tags: ["Enterprise platforms", "Application integration", "Modernization"] },
  { title: "Cloud & Infrastructure", icon: Cloud, text: "Build secure, scalable cloud foundations and infrastructure strategies for evolving business needs.", tags: ["Cloud strategy", "Migration", "Infrastructure operations"] },
  { title: "Cyber Security", icon: LockKeyhole, text: "Strengthen digital trust with security-minded architecture, risk awareness and resilient operations.", tags: ["Security architecture", "Risk management", "Resilience"] },
  { title: "Data Analytics & Intelligence", icon: LineChart, text: "Turn complex data into useful intelligence that supports confident, evidence-led decisions.", tags: ["Data platforms", "Analytics", "Business intelligence"] },
  { title: "Product Engineering", icon: Package, text: "Create and evolve digital products through user-focused engineering and disciplined delivery.", tags: ["Product strategy", "Software engineering", "Quality engineering"] },
  { title: "Business Process Transformation", icon: Activity, text: "Improve how work gets done by simplifying processes, connecting systems and enabling teams.", tags: ["Process excellence", "Operating models", "Workflow design"] },
  { title: "Innovation & Growth Strategy", icon: Zap, text: "Translate emerging opportunities into focused strategies, new offerings and sustainable growth.", tags: ["Growth strategy", "Innovation programs", "Business design"] },
  { title: "Managed Services", icon: RadioTower, text: "Support reliable technology operations with service models designed around continuity and performance.", tags: ["Application support", "Operations", "Continuous improvement"] },
  { title: "Emerging Technologies", icon: Network, text: "Evaluate and apply emerging technologies with a clear focus on relevance, value and responsible adoption.", tags: ["Technology scouting", "Prototyping", "Applied research"] },
];

export const industries = [
  { title: "Financial Services", icon: Landmark, text: "Banking, FinTech, insurance, capital markets and wealth management." },
  { title: "Healthcare & Life Sciences", icon: HeartPulse, text: "Hospitals, healthcare systems, pharmaceuticals, biotechnology and digital health." },
  { title: "Agriculture & AgriTech", icon: Sprout, text: "Precision agriculture, smart farming, sustainability and agri supply chains." },
  { title: "Manufacturing", icon: Factory, text: "Industry 4.0, industrial automation, smart operations and supply chain excellence." },
  { title: "Retail & Consumer Goods", icon: ShoppingBag, text: "Customer experience, omnichannel commerce and digital retail transformation." },
  { title: "Energy & Utilities", icon: Zap, text: "Renewable energy, smart infrastructure and sustainability programs." },
  { title: "Telecommunications", icon: RadioTower, text: "Network transformation, digital platforms and customer engagement." },
  { title: "Public Sector", icon: Landmark, text: "Digital governance, smart cities and citizen-centric services." },
  { title: "Education", icon: GraduationCap, text: "EdTech platforms, digital learning and institutional transformation." },
  { title: "Technology", icon: Code2, text: "Software engineering, cloud services, artificial intelligence and cybersecurity." },
];

export const innovationAreas = [
  "Artificial Intelligence", "Cloud Technologies", "Advanced Analytics", "Digital Platforms",
  "Automation", "Cyber Security", "Emerging Technologies", "Sustainable Innovation",
];

export const approach = [
  { number: "01", title: "Discover", text: "Understand business challenges, opportunities and strategic objectives." },
  { number: "02", title: "Design", text: "Create future-ready strategies and innovative solutions." },
  { number: "03", title: "Transform", text: "Execute change through technology, process and organizational excellence." },
  { number: "04", title: "Scale", text: "Drive sustainable growth and long-term business value." },
  { number: "05", title: "Lead", text: "Help organizations remain resilient, competitive and future-ready." },
];

export const leadershipRoles = [
  { role: "Chief Executive Officer", short: "CEO", text: "Driving vision, strategy and organizational growth." },
  { role: "Chief Operating Officer", short: "COO", text: "Leading operational excellence and business performance." },
  { role: "Chief Technology Officer", short: "CTO", text: "Advancing technology innovation and digital capabilities." },
  { role: "Chief Strategy Officer", short: "CSO", text: "Shaping long-term growth and strategic transformation." },
  { role: "Managing Directors & Practice Leaders", short: "MD", text: "Delivering industry expertise and client success." },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: [{ label: "Who We Are", href: "/about" }, { label: "Leadership", href: "/leadership" }] },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Innovation", href: "/innovation", children: [{ label: "Innovation & AI", href: "/innovation" }, { label: "Ventures", href: "/ventures" }] },
  { label: "Government", href: "/government" },
  { label: "Global Approach", href: "/global-approach" },
];
