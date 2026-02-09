import {test,expect} from '@playwright/test';
test.describe('Drag and Drop Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto('https://seleniumbase.io/other/drag_and_drop')
    })
    test('Perform Drag and Drop Action', async ({ page }) => {
        await page.locator('//img').hover();
        await page.mouse.down();
        await page.locator('//*[@ondrop="drop(event)"]').first().hover();
        await page.mouse.up();
        await page.screenshot({ path: 'screenshots/draganddrop.png' })
        await page.pause();
    })
})