const playwright = require('playwright');
beforeAll(async () => {
    jest.setTimeout(50000);
})

describe("Crossbrowser", () => {
  
    it("Interact with Pop up", async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) {
            const browser = await playwright[browserType].launch(
              {
                headless: false
              });
            
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('https://google.com/');
            await page.screenshot({ path: `example-${browserType}.png` });
            await browser.close();
            await browser.close()
        }
    })
})
