import { test, expect } from '@playwright/test';
import path from 'path';
import { configDotenv } from 'dotenv';

test('redenvfile', async ({ page }) => {
  await page.goto('${process.env.URL}');

  // Correct selectors with '#' for id
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.waitForTimeout(5000);

  // Optional: add an assertion to confirm successful login
 // await expect(page).toHaveURL(/inventory\.html/);
});
