import {test, expect} from "@playwright/test";

test('dropdown', async ({page}) => {
    await page.goto('/');
    // await page.locator('[href="/dropdown"]').click();
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await expect(page).toHaveTitle("The Internet");
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption({value: '1'});
    await expect(page.locator('option[selected="selected"]')).toHaveText('Option 1');

    await dropdown.selectOption({value: '2'});
    await expect(page.locator('option[selected="selected"]')).toHaveText('Option 2');

});