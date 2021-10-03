import Link from "next/link";
import buttons from "../styles/Button.module.css";

export default function Button({
  href = null,
  label,
  target = null,
}) {
  if (href) {
    return (
      <Link href={href}>
        <a className={buttons.Button} rel={target ? "noreferrer" : null} target={target}>{label}</a>
      </Link>
    );
  }

  return (
    <button className={buttons.Button} type="submit">{label}</button>
  );
}
