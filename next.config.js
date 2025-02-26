const { withContentlayer } = require("next-contentlayer");
const remarkPrism = require("remark-prism");
const rehypePrism = require("rehype-prism-plus");

module.exports = withContentlayer({
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [remarkPrism], // Aquí agregamos el plugin remark-prism
            rehypePlugins: [rehypePrism], // Aquí agregamos el plugin rehype-prism
          },
        },
      ],
    });

    return config;
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  compiler: {
    removeConsole: false, // Esto desactiva la eliminación de los console.log
  },
});
