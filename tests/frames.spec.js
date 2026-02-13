import {test,expect} from '@playwright/test';

test('Frames test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const frame1 = page.frame({name:'frame-top'});
    console.log(frame1);
})