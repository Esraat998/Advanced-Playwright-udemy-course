import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('winter');
  await page.getByRole('textbox', { name: 'Search Product' }).press('Enter');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('Add to cart').nth(1).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
});