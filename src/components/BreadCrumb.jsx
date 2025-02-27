import Link from "next/link";
import "@/styles/breadcrumb-style.scss";

export default function BreadCrumb() {
  return (
    <nav className="breadcrumb-container">
      <Link href="/">Inicio</Link>/
      <Link href="/01-foundations">Foundations</Link>/
      <Link href="/01-foundations/colores">Colores</Link>
    </nav>
  );
}
