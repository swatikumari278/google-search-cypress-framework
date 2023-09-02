// ***********************************************************
// This example support/e2e.js is processed and
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
// Handling SO frontend exceptions globally for the UI automation framework
// due to unhandled JS console errors detected.
// This is going to be a temporarily measure

// Import commands.js using ES2015 syntax:
import './commands'
import './login-commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')