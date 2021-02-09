const name1 = "sceenname" + new Date();
import * as playwright from 'playwright';


describe("My First Suite", () => {
  it('123', async () => {
    console.time('start')
    console.log('starting tests')
    let chrome = await playwright.chromium.launch({ headless: false, slowMo: 50 })
    let page = await chrome.newPage()

    async function navigate(url: string = 'http://bing.com', timeout: number = 0) {

      await page.goto(url)
      await page.waitForTimeout(timeout)

    }

    await navigate('http://google.com', 8000)

    await navigate()
    //await page.goto('http://google.com')
    await page.waitForTimeout(10 * 1000)
    console.timeEnd('start')
  });
});
