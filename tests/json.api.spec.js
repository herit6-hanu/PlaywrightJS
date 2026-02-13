import { test, expect, request } from '@playwright/test';
test.describe('JSON API Suite', () => {
    let apiContext;;
    test('Get all the comments', async () => {
        apiContext = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })
        let response = await apiContext.get('/posts');
        const jstExpect = expect.configure({ timeout: 5000 });
        jstExpect(response.status()).toBe(200);
        let responseBody = await response.json();
        // console.log(responseBody);

        //post 
        const postResponse = await apiContext.post('/posts', {
            data: {
                "userId": 11,
                "title": "at nam consequatur ea labore ea harum",
                "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
            }
        })
        jstExpect(postResponse.status()).toBe(201);
        const postResponseBody = await postResponse.json();
        console.log(postResponseBody);
        response = await apiContext.get('/posts');
        jstExpect(response.status()).toBe(200);
        responseBody = await response.json();
        console.log(responseBody);
        const deleteResponse = await apiContext.delete(`/posts/${postResponseBody.id}`);
        jstExpect(deleteResponse.status()).toBe(200);
        apiContext.dispose();
    })
})