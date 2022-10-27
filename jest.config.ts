module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    //  testMatch: ["**/src/specs/locators.spec.ts"], //For debugging with spec name
    transform: {
      "^.+\\.(ts)$": "ts-jest",
    },
    "reporters": [
      "default",
      ["jest-html-reporters", {
        "publicPath": "./html-report",
        "filename": "report.html",
        "expand": false,
        "openReport": false
      }]
    ],
    testEnvironmentOptions: {
        "jest-playwright": {
          browsers: ["chromium"],
          launchOptions: {
            // headless: false, //remove this step if you want to generate pdf
            args: ['--start-maximized'],
          },
        },
      }
  };