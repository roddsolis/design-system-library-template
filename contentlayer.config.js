// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.mdx", // Apunta a todos los archivos .mdx en tu carpeta de contenido
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/app/content", // Ruta a tus archivos .mdx
  documentTypes: [Page], // Asegúrate de usar el tipo de documento adecuado
});
