import HeaderByline from "./HeaderByline";
import headers from "../styles/Header.module.css";

export default function Header({
  tagline,
  title,
}) {
  return (
    <div className={headers.Header}>
      <h1 className="ColorGradient">{title}</h1>
      <p className={headers.Header_tagline}>{tagline}</p>
      <HeaderByline/>
    </div>
  );
}
