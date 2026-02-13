import { test } from '@playwright/test';

test('Move Cursor', async ({ page }) => {
  await page.goto('https://google.com');
 let j=2;
  for (let i = 0; i < j; i++) { 
    j++;
    await page.evaluate(() => {
      window.scrollBy(0, 100);
    });
    await page.waitForTimeout(50000); // wait 5 seconds
  }
});
