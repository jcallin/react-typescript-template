module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "jest", "react"],
  settings: {
    react: {
      version: "detect"
    },
    "eslint.validate": [
      { language: "typescript", autoFix: true },
      { language: "typescriptreact", autoFix: true }
    ]
  },
  env: {
    browser: true,
    node: true
  }
};
