import { Link } from "react-router-dom";

type BrandProps = { light?: boolean; compact?: boolean; expandOnHover?: boolean };
export default function Brand({ light = true, compact = false, expandOnHover = false }: BrandProps) {
  return (
    <Link
      to="/"
      className={`brand ${compact ? "brand--compact" : ""} ${expandOnHover ? "brand--reveal" : ""}`}
      aria-label="HROCYNTH home"
    >
      <img
        className={expandOnHover ? "brand-full-logo" : ""}
        src={light ? "/assets/brand/hrocynth-logo-dark-transparent.png" : "/assets/brand/hrocynth-logo-light-transparent.png"}
        alt="HROCYNTH — Where Vision Meets The Horizon Of Possibility"
      />
    </Link>
  );
}
