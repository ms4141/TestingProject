// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber())
// };
// Import commands.js using ES2015 syntax:

require("cypress-xpath");
require("cypress-iframe");
import "./commands";
import "./base";

// Alternatively you can use CommonJS syntax:
// require('./commands')
