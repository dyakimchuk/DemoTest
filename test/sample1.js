const { webkit, chromium } = require("playwright");
const name = "sceenname" + new Date();
let safari, chrome;

describe("JS Suite", () => {
  before(async () => {
    safari = await webkit.launch({ headless: false, slowMo: 50 });
    chrome = await chromium.launch({ headless: false, slowMo: 50 });
  });

  it("JS it 1", async () => {
    const page = await safari.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `screenshots/safari_${name}.png` });
    await page.waitForTimeout(3000);
    await safari.close();
  });

  xit("JS it 2", async () => {
    const page = await chrome.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `screenshots/chrome_${name}.png` });
    await page.waitForTimeout(3000);
    //await chrome.close();
  });

  xit("JS it 3", async () => {
    const page = await chrome.newPage();
    await page.goto("http://google.com");
    await page.screenshot({ path: `screenshots/chrome_2_${name}.png` });
    await page.waitForTimeout(1000);
    await chrome.close();
  });
});
