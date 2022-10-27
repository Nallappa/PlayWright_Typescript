
describe("Window handling", () => {

    beforeAll(async () => {
        //  context = await browser.newContext();
        await page.goto("https://letcode.in/windows")
    });

    // it.skip("Single page handling", async () => {
    //     const [newWindow] = await Promise.all([
    //         context.waitForEvent("page"),
    //         await page.click("#home")
    //     ])
    //     await newWindow.waitForLoadState();
    //       let newwind = await newWindow.url();
    //     expect(newWindow.url()).toContain("test");
    //     await newWindow.close();
     
    // });

    it("Multipage handling", async () => {
        const [multipage] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")
        ])
        await multipage.waitForLoadState();
        const allwindows = page.context().pages();
        console.log("no.of windows: " + allwindows.length);
        allwindows.forEach(page => {
            console.log(page.url());
        });
    });

    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})