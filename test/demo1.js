const { webkit, chromium } = require("playwright");
const name = "sceenname" + new Date();
let safari, chrome;

xdescribe("My First JS Suite", () => {
  before(async () => {
    safari = await webkit.launch();
    chrome = await chromium.launch({ headless: false, slowMo: 50 });
  });

  it("My First Test", async () => {
    const page = await safari.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    // await page.screenshot({ path: `screenshots/safari_${name}.png` });
    await safari.close();
  });

  it("My Second Test", async () => {
    const page = await chrome.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `screenshots/chrome_${name}.png` });
    //await chrome.close();
  });

  it("Third Test", async () => {
    const page = await chrome.newPage();
    await page.goto("http://google.com");
    await page.screenshot({ path: `screenshots/chrome_2_${name}.png` });
    await page.waitForTimeout(1000);
    await chrome.close();
  });
});
