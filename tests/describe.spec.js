import { test, expect } from '@playwright/test';

test.describe('Test suite', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://playwright.dev/');
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    })
    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
    });
    test('check title', async ({ page }) => {
        await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    })

})
