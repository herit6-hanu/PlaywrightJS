import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
test('Download event', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://freetestdata.com/document-files/doc/');
    const downloadEl = page.locator('//*[text()="Select File & Download"]').first();
    await downloadEl.focus();
    await downloadEl.hover();
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        downloadEl.click()
    ])
    fs.mkdirSync('downloads', { recursive: true });
    const fileName = download.suggestedFilename();
    const filePath = path.join('downloads', fileName);
    await download.saveAs(filePath);
    console.log(`File downloaded to ${filePath}`);
    const page2 = await context.newPage();
    await page2.goto('https://freetestdata.com/');
})