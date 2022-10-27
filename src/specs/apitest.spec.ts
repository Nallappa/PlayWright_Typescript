
beforeAll(async () => {
    jest.setTimeout(50000);
})

describe("Api Testing scenarios", () => {

    it("Api Testing", async () => {
        const [request] = await Promise.all([
            page.waitForEvent('requestfinished'),
            page.goto('https://google.com')
          ]);
          console.log(request.timing());
          console.log(await request.response())
    })
})


