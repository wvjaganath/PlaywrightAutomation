import {test, expect}  from "@playwright/test";
import * as path from "node:path";

test('login', async ({page}) => {

    await page.goto('/');
    await expect(page).toHaveTitle("Home Page");
    await page.getByRole('link', {name: 'Sign In'}).click();
    await page.locator('#email').fill(process.env.USERNAME);
    await page.locator('#pass').fill(process.env.PASSWORD);
    await page.locator('#send2').click();
    await expect(page).toHaveTitle("Home Page");
});