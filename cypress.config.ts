import { defineConfig } from 'cypress'

const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")

export default defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'xml-reporter-config.json',
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {

    setupNodeEvents(on, config) {
    on("task", {

        lighthouse: lighthouse()
      })
      on('before:browser:launch', (browser, launchOptions) => {
      prepareAudit(launchOptions)
      if ((browser.name === 'chrome' || browser.name === 'chromium' || browser.name === 'electron') && browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
          return launchOptions
        }
      })
      // require('@cypress/grep/src/plugin')(config)
      // return config
    },

    baseUrl: 'https://www.google.com',
    testIsolation: true

  }

})



