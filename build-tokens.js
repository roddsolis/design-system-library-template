import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

const sd = new StyleDictionary({
  source: ["src/tokens/global.json", "src/tokens/Semantic.json"],
  log: {
    verbosity: "default",
  },
  preprocessors: ["tokens-studio"],
  platforms: {
    scss: {
      buildPath: "src/styles/",
      transformGroup: "tokens-studio",
      transforms: ["shadow/css/shorthand", "name/kebab"],
      files: [
        {
          destination: "/variables.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes("Semantic.json"),
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
