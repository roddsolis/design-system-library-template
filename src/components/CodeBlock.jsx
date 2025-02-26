import { useEffect } from "react";
import Prism from "prismjs";

// Cargar los lenguajes que vas a usar
import "prismjs/components/prism-jsx.min.js"; // Por ejemplo, para JSX

export default function Codeblock({ children, language }) {
  useEffect(() => {
    Prism.highlightAll(); // Asegúrate de que Prism resalte los bloques de código
  }, [children]);

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
