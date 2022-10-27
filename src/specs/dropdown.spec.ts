
beforeAll(async () => {
    await page.goto("https://letcode.in/dropdowns")
});

afterAll(async () => {
    await page.close()
    await browser.close()
})

describe("How to handle Select", () => {

    it("Select a dropdown based on value and get the count", async () => {
        const fruits = await page.$("#fruits");
        const fruitscount = await page.$$("#fruits option");
        //Select by index
        await fruits?.selectOption("2");
        //Total count
        console.log(fruitscount.length);
    });

    it("get selected text", async () => {
        //Select by Text
        await page.selectOption("#country", "India");
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value)
        console.log(text);
        expect(text).toBe("India");
    })

})