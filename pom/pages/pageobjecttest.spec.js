import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { AddCart } from '../pom/pages/addcart';

test("pageobject_test",async({page})=>{
    const homes = new HomePage(page);
await homes.goto();

})