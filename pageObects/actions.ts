import {chromium} from 'playwright'

export default class Actions {
    async startTest(url: string, headlessStatus: boolean) {
        let browser = await chromium.launch({ headless: headlessStatus, args: ['--start-maximized'] })
        let context = await browser.newContext({ viewport: null });
        let page = await context.newPage();
        await page.goto(url, { waitUntil: 'networkidle' });
    }
}
