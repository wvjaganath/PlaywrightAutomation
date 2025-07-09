import {expect, test} from "@playwright/test";


test("Broken Images", async ({page}) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Broken Images' }).click();

    await expect(page).toHaveTitle("The Internet");
    await expect(page.getByRole('heading', { name: 'Broken Images' })).toHaveText("Broken Images");

    await page.route('**/*', (route) => {
        route.continue().catch(() => {});
    });

    const brokenImage = await page.evaluate(async () => {
        const images = Array.from(document.querySelectorAll('img'));
        const brokenImageList = []

        for (const image of images) {
            const response = await fetch(image.src, {method: 'HEAD'}).catch(() => null);
            if(!response || response.status !== 200) {
                brokenImageList.push(image.src);
            }
        }
        return brokenImageList;
    })

    console.log(`Total Broken Images: ${brokenImage.length}`);
    console.log("broken Images Names :");
    for (const src of brokenImage) {
        console.log(src);
    }
});