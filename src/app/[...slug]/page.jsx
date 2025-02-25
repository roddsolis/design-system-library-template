"use client";
import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXProvider } from "@mdx-js/react";

// Los componentes personalizados que quieras usar en MDX (como Table, etc.)
import Table from "../../components/Table"; // Si tienes una tabla personalizada

const Page = ({ params }) => {
  // Unir el slug en caso de que haya múltiples niveles en la URL
  const slug = params.slug.join("/");
  console.log(slug);

  // Buscar la página correspondiente en Contentlayer
  const page = allPages.find((p) => p._raw.flattenedPath === slug);

  // Si la página no existe, lanzar un error 404
  if (!page) {
    return notFound();
  }

  // Obtener el componente MDX
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(page.body.code);

  // Los componentes que quieres pasar al MDXProvider
  const components = {
    table: Table, // Asocia la tabla personalizada
    // Puedes agregar otros componentes personalizados aquí
  };

  return (
    <MDXProvider components={components}>
      <MDXContent />
    </MDXProvider>
  );
};

export default Page;
