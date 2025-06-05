import {test, expect} from "@playwright/test";

test("Add Remove Elements", async ({page}) => {
    await page.goto("/");
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await expect(page).toHaveTitle("The Internet");
    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

    await page.getByRole('button', { name: 'Delete' }).click();

    await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden();

});