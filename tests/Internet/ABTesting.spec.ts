import {test, expect} from "@playwright/test";

test("A/B Testing", async ({page}) => {

    await page.goto("/");
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await expect(page).toHaveTitle("The Internet");
    await expect(page.getByRole('heading', { name: 'A/B Test Control' })).toHaveText("A/B Test Control");
    });