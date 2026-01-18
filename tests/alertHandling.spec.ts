import {test, expect} from '@playwright/test'

test('click on alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.on("dialog", async(alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual("I am a JS Alert");
        await alert.accept();
        await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
    })

    await page.locator("button[onclick='jsAlert()']").click();
    await page.close();
});

test('alert confirmation - click cancel', async({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.on("dialog", async(alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual("I am a JS Confirm");
        await alert.dismiss();
        await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
    })

    await page.locator("button[onclick='jsConfirm()']").click();
    await page.close();
})

test('alert textbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog", async(alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual("I am a JS prompt");
        await alert.accept("Playwright");
        await expect(page.locator("#result")).toHaveText("You entered: Playwright");
    })

    await page.locator("button[onclick='jsPrompt()']").click();
    await page.close();
})