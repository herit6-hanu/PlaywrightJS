import { test, expect } from '@playwright/test';

// test.describe('skip this test'()=> {
    test('want to skip this test',{
        tags: ['@regression','@skip']
    }, async ({ page, browserName }) => {
    test.skip(browserName == 'chromium', 'skipping the test for chromium browser')
})
// })


test.describe('skip this test', ()=>{
    test.skip(({browserName})=> browserName =='chromium', 'skipping the test for chromium browser')
})