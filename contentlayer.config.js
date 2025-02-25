import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.mdx", // Ajustamos para que tome desde la carpeta content
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath.replace("content/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content", // Ahora apunta a la nueva ubicación
  documentTypes: [Page],
});
