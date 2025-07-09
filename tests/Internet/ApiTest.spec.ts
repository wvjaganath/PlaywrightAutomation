import {test, expect} from '@playwright/test';

test('API GET Request', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(`Response Status: ${response.status()}`);
    expect(response.status()).toBe(200);
});

test('API POST Request', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        headers:{
                'x-api-key': 'reqres-free-v1',
                'Content-Type': 'application/json'
        },
        data: {
            name: 'John Doe',
            job: 'leader'
        }
    });
    console.log(`Response Status: ${response.status()}`);
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(`Response Body: ${JSON.stringify(responseBody)}`);
    expect(responseBody.name).toBe('John Doe');
    expect(responseBody.job).toBe('leader');
});