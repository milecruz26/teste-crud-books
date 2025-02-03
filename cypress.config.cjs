const { defineConfig } = require("cypress");
const vitePreprocessor = require("cypress-vite");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
    supportFile: false,
  },
});
