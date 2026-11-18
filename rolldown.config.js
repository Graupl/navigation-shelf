import { defineConfig } from "rolldown";
import { minify } from "rollup-plugin-esbuild";
import { babel } from "@rollup/plugin-babel";

const plugins = [babel({ babelHelpers: "bundled" }), minify()];

export default defineConfig([
  {
    input: "./src/js/navigation-shelf/index.js",
    output: {
      file: `dist/js/navigation-shelf.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation-shelf/NavigationShelf.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file:
        format === "cjs"
          ? `dist/js/component/navigation-shelf.cjs`
          : `dist/js/component/navigation-shelf.${format}.js`,
      format,
      name: "NavigationShelf",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation-shelf/NavigationShelf.js",
    output: [
      { file: "dist/js/navigation-shelf.es.js", format: "es", sourcemap: true },
      { file: "dist/js/navigation-shelf.cjs", format: "cjs", sourcemap: true },
    ],
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation-shelf/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file:
        format === "cjs"
          ? `dist/js/generator/navigation-shelf.cjs`
          : `dist/js/generator/navigation-shelf.${format}.js`,
      format,
      name: "NavigationShelfGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
]);
