import {test, expect} from '@playwright/test'

test('Practice textbox', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[placeholder='Username']").pressSequentially("Admin", {delay: 200});
    await page.locator("input[placeholder='Password']").pressSequentially("admin123", {delay: 200});
    await page.locator("button[type='submit']").press('Enter');
    await page.locator(".oxd-userdropdown-name").click();
    await page.locator("text=Logout");
})