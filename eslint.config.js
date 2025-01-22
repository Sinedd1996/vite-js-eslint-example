import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      eqeqeq: "error",
      "no-unused-vars": "warn",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-alert": "error",
      "no-new-wrappers": "error",
      "no-ternary": "error",
    }
  }
];