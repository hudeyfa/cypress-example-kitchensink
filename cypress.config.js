const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080',
    excludeSpecPattern: '**/{1-getting-started,2-advanced-examples}/*',
    env: {
      'navbarText': 'cypress.io',
    },
  },
})
