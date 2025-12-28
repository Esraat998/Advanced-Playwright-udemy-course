import { test } from '@playwright/test'

test('Login Test for Orange HRM', async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.locator("span.oxd-userdropdown-tab").click();
    await page.locator("text = Logout").click();
    await page.close();
})
