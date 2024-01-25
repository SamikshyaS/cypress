const { defineConfig } = require("cypress");
require("dotenv").config();
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const dotenvPlugin = require("cypress-dotenv");

module.exports = (on, config) => {
  // Load environment variables from .env
  config = dotenvPlugin(config);

  // Other configurations...

  return config;
};

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    requestTimeout: 40000,
  },
});
