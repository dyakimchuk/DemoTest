const name1 = "sceenname" + new Date();
import * as playwright from 'playwright';


describe("My First Suite", () => {
  it('123', async () => {
    let chrome = await playwright.chromium.launch({ headless: false, slowMo: 50 })
    let page = await chrome.newPage()
    await page.goto('http://google.com')
    await page.waitForTimeout(10 * 1000)
  });
});
