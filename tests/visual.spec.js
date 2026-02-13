import {test,expect} from '@playwright/test';

test('Visual Testing', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveScreenshot({ maxDiffPixels: 20 });
});