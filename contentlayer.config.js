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

const rehypeoptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page],
  mdx: {
    rehypePlugins: [
      async () => {
        const rehypePrettyCode = (await import("rehype-pretty-code")).default;
        return [rehypePrettyCode, rehypeoptions];
      },
    ],
  },
});
