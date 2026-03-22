import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["_site/**", "node_modules/**"] },
  // Node.js files (Eleventy config)
  {
    files: ["eleventy.config.cjs"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
  // Browser JS
  {
    files: ["src/js/**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: globals.browser,
    },
  },
];
