module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
  ],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    "space-before-function-paren": 0,
    semi: 0,
    "react/jsx-quotes": 0,
    "jsx-quotes": [2, "prefer-double"],
  },
};
