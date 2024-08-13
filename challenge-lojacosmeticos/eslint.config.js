import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser },
   env: {es2021: true, node: true}},
  pluginJs.configs.recommended,
];