import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export function ServiceCard({ item, index = 0 }: { item: any; index?: number }) {
  const Icon = item.icon;
  return <Reveal delay={(index % 3) * 0.06}><article className="info-card service-card">
    <div className="card-topline"><span className="card-index">{String(index + 1).padStart(2, "0")}</span><span className="icon-box"><Icon size={21}/></span></div>
    <h3>{item.title}</h3><p>{item.text}</p>
    {item.tags && <div className="tag-list">{item.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div>}
    <span className="card-arrow"><ArrowUpRight size={18}/></span>
  </article></Reveal>;
}

export function IndustryCard({ item, index = 0 }: { item: any; index?: number }) {
  const Icon = item.icon;
  return <Reveal delay={(index % 4) * 0.05}><article className="info-card industry-card">
    <span className="icon-box"><Icon size={22}/></span><span className="card-index">{String(index + 1).padStart(2, "0")}</span>
    <h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow"><ArrowUpRight size={18}/></span>
  </article></Reveal>;
}
