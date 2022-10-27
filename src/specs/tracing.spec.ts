import { chromium } from "playwright";
describe('Tracing Browser', () => {
    jest.setTimeout(50000);

    it('Tracing script', async () => {
       
        // Open new page
        const page = await context.newPage();

        // Go to https://letcode.in/
        await page.goto('https://letcode.in/');

        // Click text=/.*Log in.*/
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/signin' }*/),
            page.click('text=/.*Log in.*/')
        ]);

        // Click input[name="email"]
        await page.click('input[name="email"]');

        // Fill input[name="email"]
        await page.fill('input[name="email"]', 'nalli.4501@gmail.com');

        // Press Tab
        await page.press('input[name="email"]', 'Tab');

        // Fill input[name="password"]
        await page.fill('input[name="password"]', 'Nalli@123');
        await browser.startTracing(page,{path:`trace.json`,screenshots:true})
        // Click //button[normalize-space(.)='LOGIN']
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
            page.click('//button[normalize-space(.)=\'LOGIN\']')
        ]);
        await browser.stopTracing();
        // Click text=/.*Sign out.*/
        await page.click('text=/.*Sign out.*/');
        // assert.equal(page.url(), 'https://letcode.in/');

        // Close page
        await page.close();

        // ---------------------
        await context.close();
        await browser.close();
    })

})