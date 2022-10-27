

describe("Frames handling concept", () => {

    beforeAll(async () => {
        await page.goto("https://letcode.in/frame");
        jest.setTimeout(50000);
    })

    it("Interact with frames", async () => {
        const frame = page.frame({ name: "firstFr" });
        // frame?.fill("")
            await frame.fill("input[name='fname']", "Nallappa");
            await frame.fill("input[name='lname']", "Pasavala");
            // inner frame
            const frames = frame.childFrames();
            console.log('No. of inner frames: ' + frames.length);
            // if (frames != null)
            //     await frames[0].fill("input[name='email']", "nallappa.123@gmail.com")
            // else {
            //     console.log("Wrong frame");
            // }
            // const parent = frames[0].parentFrame()
            // // await frame.fill("input[name='lname']", "Letcode");
            // await parent?.fill("input[name='lname']", "Youtube");
       
    })
})