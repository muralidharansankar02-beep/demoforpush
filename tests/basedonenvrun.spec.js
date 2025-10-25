import { test, expect } from '@playwright/test';
import path from 'path';
import { configDotenv } from 'dotenv';
import {QAModual1Testdata} from '../teest_data/qa/google.json';
//import {UATModual1Testdata} from '../teest_data/UAT/google.json';

test('datadiventesting', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  // Correct selectors with '#' for id
  await page.locator('#user-name').fill(Modual1Testdata.name);
  await page.locator('#password').fill(Modual1Testdata.password);
  await page.locator('#login-button').click();

  await page.waitForTimeout(5000);

})

  // Optional: add an assertion to confirm successful login
 // await expect(page).toHaveURL(/inventory\.html/);
