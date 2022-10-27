

beforeAll(async () => {
    await page.goto("https://letcode.in/elements")
    jest.setTimeout(50000);
})

describe("Search Git Repo", () => {
 
    it.skip("All Selectors", async () => {
        //Text Selector
            await page.click('text=Log in');
        //Css Selector
            await page.click('button');
            await page.click('#nav-bar .contact-us-item');
        //Select by attribute, with css selector
            await page.click('[data-test=login-button]');
            await page.click('[aria-label="Sign in"]');
        //Combine css and text selectors
            await page.click('article:has-text("Playwright")');
            await page.click('#nav-bar :text("Contact us")');
        // xpath selector
            await page.click('xpath=//button');
            await page.click('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input');
        // nth match selector
            await page.click(':nth-match(:text("Buy"), 3)');
        //id, data-testid, data-test-id, data-test selectors
          // Fill an input with the id "username"
           await page.fill('id=username', 'value');
          // Click an element with data-test-id "submit"
           await page.click('data-test-id=submit'); 
    })

    it("Enter Git username", async () => {
        const header = await page.$("nav[role='navigation']")
        // header?.screenshot({ path: "header.png" })
        const ele = await (await page.$("input[name='username']"));
        await ele?.fill("ortonikc");
        await ele?.press("Enter");
    })
    it("Print all the repos", async () => {
        await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 })
        const repos = await page.$$("app-gitrepos ol li");
        console.log(repos.length);
        const allUrls = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }));

        //Page Scraping using evaluate basically it will inject code into browser
        // const urls = await page.evaluate( () => {
        //     const urlval = document.querySelectorAll('app-gitrepos ol li');
        //     return Array.from(urlval).map(name =>name.innerHTML)
        // })

        console.log(allUrls);
        // await page.screenshot({ path: "fs.png", fullPage: true })
    })

    afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close()
    })
})