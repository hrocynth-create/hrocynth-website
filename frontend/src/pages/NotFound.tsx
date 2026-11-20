import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This horizon isn't<br/><em>on the map.</em></h1><p>The page may have moved or the address may be incorrect.</p><Link to="/" className="button button-primary"><ArrowLeft size={17}/> Back to homepage</Link></section>;
}
