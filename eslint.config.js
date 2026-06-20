import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@stylistic/indent": [
        "error", 2, {
          "ignoredNodes": ["JSXElement *", "JSXElement"],
          "SwitchCase": 1,
        },
      ],
      "@stylistic/jsx-indent-props": ["warn", "first"],
      "@stylistic/jsx-closing-bracket-location": ["warn", "after-props"],
      "@stylistic/jsx-first-prop-new-line": ["warn", "never"],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/brace-style": [
        "error", "stroustrup", { "allowSingleLine": true },
      ],
      "@stylistic/type-annotation-spacing": ["error"],
      "@stylistic/max-len": ["error", { "code": 80 }],
      "@stylistic/no-tabs": ["error"],
      "@stylistic/eol-last": ["error", "always"],
    },
  },
  {
    files: ["**/*.test.ts"],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
