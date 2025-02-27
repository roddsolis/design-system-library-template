"use client";
import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXProvider } from "@mdx-js/react";
import "../../styles/codeblock.scss";
import "../../styles/mdx-style.scss";
import BreadCrumb from "@/components/BreadCrumb.jsx";
import ColorPalette from "../../components/ColorPalette";

const Page = ({ params }) => {
  const slug = params.slug.join("/");

  const page = allPages.find((p) => p._raw.flattenedPath === slug);

  if (!page) {
    return notFound();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(page.body.code);

  const components = {
    BreadCrumb: BreadCrumb,
    ColorPalette: ColorPalette,
  };

  return (
    // <MDXProvider components={components}></MDXProvider>
    <MDXContent components={components} />
  );
};

export default Page;
