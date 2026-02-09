import {test,expect} from '@playwright/test';

test('set files test', async ({page})=>{
    await page.goto('https://www.csm-testcenter.org/test?do=show&subdo=common&test=file_upload');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('//*[@name="file_upload"]').first().click();
    await page.waitForTimeout(3000);
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('c:\\Users\\MH121039\\Downloads\\Hanumantha TestEngineer Resume.pdf');

    await page.locator('//*[@name="file_upload"]').last().setInputFiles('c:\\Users\\MH121039\\Downloads\\Hanumantha TestEngineer Resume.pdf');
    await page.pause();
}) 