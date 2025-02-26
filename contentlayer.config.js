import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.mdx",
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
  contentDirPath: "content", // Asegúrate de que la carpeta sea correcta
  documentTypes: [Page],
});
