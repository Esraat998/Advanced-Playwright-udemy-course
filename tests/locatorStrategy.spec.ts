//https://www.saucedemo.com/

import {test} from '@playwright/test'

test('Different Locator Strategy', async({ page })=> {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click;
})