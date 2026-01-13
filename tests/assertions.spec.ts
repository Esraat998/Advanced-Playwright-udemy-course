import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator("button[onclick='addElement()']").click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.close();
})

// Screenshots
test('Screenshot assertion', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page).toHaveScreenshot();
    await page.close();
})