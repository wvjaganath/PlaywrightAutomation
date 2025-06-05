import {expect,test} from "@playwright/test";

test('Basic Auth', async ({page}) => {
    await page.goto("/");
    await page.getByRole('link', { name: 'Basic Auth' }).click();
});