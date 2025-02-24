const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            // Aquí puedes agregar configuraciones específicas si las necesitas
          },
        },
      ],
    });

    return config;
  },
});
