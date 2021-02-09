import { Page, chromium } from 'playwright';
let page: Page;
const name = "sceenname" + new Date();


describe("Typescript Suite", () => {
  before(async () => {
    page = await (await chromium.launch({ headless: false, slowMo: 50 })).newPage()
  })
  it('Print each page title', async () => {
    async function navigate(url: string = 'http://bing.com', timeout: number = 0) {
      await page.goto(url)
      console.log('My page tite is === ' + await page.title())
      await page.waitForTimeout(timeout)
    }
    await navigate('http://google.com')
    await navigate();
    await navigate('http://5btc.ru/voice/')
    await (await page.$('#from')).click({ clickCount: 3 })
    await (await page.$('#from')).type('Заебись фреймворк! Может нормальный возьмешь?')
    await page.keyboard.press('F2');
    await page.waitForTimeout(5000)
    await navigate('https://webdriver.io/docs/gettingstarted.html', 5000)
    await page.screenshot({ path: `screenshots/chrome_2_${name}.png` });
  });

  it("TS it 2", async () => {
    //const page = await chromium.newPage();
    await page.goto("http://google.com");
    await page.screenshot({ path: `screenshots/chrome_2_${name}.png` });
    await page.waitForTimeout(1000);
    //await chromium.();
  });

});
