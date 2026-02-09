import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('a11y scan', async ({ page }) => {
  await page.goto('https://dequeuniversity.com/demo/mars/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});