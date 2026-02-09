import {test,expect} from '@playwright/test';
test.describe('Drag and Drop Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto('https://seleniumbase.io/other/drag_and_drop')
    })
    test('Perform Drag and Drop Action', async ({ page }) => {
        await page.locator('//img');
        await page.locator('#droppable').hover();
        await p
        await source.dragTo(target);
        await page.screenshot({ path: 'screenshots/draganddrop.png' })
    })
})