
beforeAll(async () => {
    await page.goto("https://letcode.in/alert")
    jest.setTimeout(50000);
})

describe("Pop up handling concept", () => {

    it("Interact with Pop up", async () => {
        const ele = await page.$("#prompt");
        
        page.on("dialog", async (dialog) => {
            console.log('Message: ' + await dialog.message());
            await dialog.accept("hello Nallappa");
            console.log('Default Value: ' + await dialog.defaultValue());
            console.log('Type: ' + await dialog.type());
        });

        await ele?.click();
        console.log('End: ');
    })
})

afterAll(async () => {
    await page.close()
    await browser.close()
})