const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: true,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  failOnNonZeroExit: false,
  defaultCommandTimeout: 30000,
  execTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 80000,
  viewportWidth: 1600,
  viewportHeight: 1200,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: 'cypress/integration',
  },
})
