import { test, expect } from '@playwright/test';
import fs from 'fs';
import path, { dirname } from 'path';
import {parse} from 'csv-parse/sync';

const records= parse(
    fs.readFileSync(path.join(__dirname,'../teest_data/qa/testdata.csv')),
    {
        columns:true,
        skip_empty_lines:true,
    })
    for(const record of records){

test('datacsv ${record.testcaseID}', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  // Correct selectors with '#' for id
  await page.locator('#user-name').fill(record.name);
  await page.locator('#password').fill(record.password);
  await page.locator('#login-button').click(); 

  await page.waitForTimeout(5000);

})
}

  // Optional: add an assertion to confirm successful login
 // await expect(page).toHaveURL(/inventory\.html/);
