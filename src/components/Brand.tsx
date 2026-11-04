import { Link } from "react-router-dom";

type BrandProps = { light?: boolean; compact?: boolean };
export default function Brand({ light = true, compact = false }: BrandProps) {
  return (
    <Link to="/" className={`brand ${compact ? "brand--compact" : ""}`} aria-label="HROCYNTH home">
      <img
        src={light ? "/assets/brand/hrocynth-logo-dark-transparent.png" : "/assets/brand/hrocynth-logo-light-transparent.png"}
        alt="HROCYNTH — Where Vision Meets The Horizon Of Possibility"
      />
    </Link>
  );
}
