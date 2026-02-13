import {test,expect,request} from '@playwright/test';
import fs from 'fs';
test.describe('Cat API Suite', () => {
    let apiContext;
    test.beforeAll(async () => {
        apiContext = await request.newContext({
            baseURL: 'https://http.cat'
        })
    })
    test('Validate Cat API', async () => {
        const response = await apiContext.get('/101');
        expect(response.status()).toBe(200); 
        // Check content type header 
        const contentType = response.headers()['content-type']; 
        expect(contentType).toContain('image/jpeg'); 
        // Optionally check body length (image bytes exist) 
        const buffer = await response.body();
        fs.writeFileSync('screenshots/cat-101.jpg', buffer); 
        console.log('Image saved as cat-101.jpg');
    })
})