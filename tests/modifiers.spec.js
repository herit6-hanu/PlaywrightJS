import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test.describe('Modifiers Suite', {
    tag: ['@modifiers']
}, () => {
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://www.onlinemictest.com/keyboard-test/');
    })
    test('@tabkey Verify Tab Key Pressed', async ({ page }) => {
        await page.keyboard.down('Tab');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'screenshots/tabkeypressed.png' });
        await page.keyboard.up('Tab');
        await page.screenshot({ path: 'screenshots/tabkeyup.png' });
    })
    test('@controlkey Verify Control Key Pressed', async ({ page }) => {
        await page.keyboard.down('Control');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'screenshots/controlkeypressed.png' });
        await page.keyboard.up('Control');
        await page.screenshot({ path: 'screenshots/controlkeyup.png' });
    })
    test('@backspacekey Verify backspace Key Pressed', async ({ page }) => {
        await page.keyboard.down('Backspace');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'screenshots/backspacekeypressed.png' });
        await page.keyboard.up('Backspace');
        await page.screenshot({ path: 'screenshots/backspacekeyup.png' });
    })
    test('@alt Verify Alt Key Pressed', async ({ page }) => {
        await page.keyboard.down('Alt');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'screenshots/altkeypressed.png' });
        await page.keyboard.up('Alt');
        await page.screenshot({ path: 'screenshots/altkeyup.png' });
    })
})