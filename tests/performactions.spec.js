import { test, expect } from '@playwright/test';
test.describe.configure({mode:'serial'});
test.describe('Perform Actions Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto('https://demoqa.com/buttons')
    })
    test('Perform Double Click Action', async ({ page }) => {
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        await page.screenshot({ path: 'screenshots/doubleclick.png' })
    })
    test('Perform Right Click Action', async ({ page }) => {
        await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
        await page.screenshot({ path: 'screenshots/rightclick.png' })
    })
})