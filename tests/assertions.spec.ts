import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.close();
})