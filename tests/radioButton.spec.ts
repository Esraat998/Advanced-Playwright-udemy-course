import {test, expect} from '@playwright/test'

test('Regular button click', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await expect(page.locator("input[value='Male']")).not.toBeChecked();
    await page.locator("input[value='Male']").check();
    await expect(page.locator("input[value='Male']").isChecked).toBeTruthy();
})

