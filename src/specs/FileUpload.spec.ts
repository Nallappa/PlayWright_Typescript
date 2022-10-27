
const filePath0 = './playwright.png';

afterAll(async () => {
    await page.close()
    await browser.close()
  })
  
describe('Upload file', () => {

    it("upload file using set input files", async () => {
        await page.goto('file:C:\\Users\\SESA620164\\Documents\\Automation\\PlaywrightTypescript\\fileupload.html');
        await page.setInputFiles("input[type='file']", [filePath0]);
        const upload = await page.$('#upload');
        await upload?.click();
    });

})