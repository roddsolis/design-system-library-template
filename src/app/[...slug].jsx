import { useMDXComponent } from "next-contentlayer/hooks";
import { allPages } from "contentlayer/generated"; // Importa todas las páginas generadas por Contentlayer
import MainContent from "@/components/MainContent"; // Importa tu componente MainContent

// Función para obtener todas las rutas posibles
export async function getStaticPaths() {
  const paths = allPages.map((page) => ({
    params: { slug: page._raw.flattenedPath.split("/") },
  }));

  return { paths, fallback: false }; // Cambia a true si deseas soporte para rutas no generadas previamente
}

// Función para obtener el contenido de cada página según el slug
export async function getStaticProps({ params }) {
  const pageSlug = params.slug.join("/"); // Juntar el slug para obtener la ruta completa
  const page = allPages.find((page) => page._raw.flattenedPath === pageSlug);

  return {
    props: { page },
  };
}

export default function Page({ page }) {
  const MDXContent = useMDXComponent(page.body.code); // Esto convierte el contenido MDX en un componente React

  return (
    <MainContent>
      <h1>{page.title}</h1>
      <MDXContent /> {/* Esto renderiza el contenido MDX */}
    </MainContent>
  );
}
