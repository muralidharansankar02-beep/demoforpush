import { test, expect } from '@playwright/test';
const {expect} = require('@playwright/test')

exports.addcart = class addcart{
    /**
     * 
     * @param {import ('@playwright/test').page} page 
     */
    constructor(page){
this.page = page;
this.product = page.locator("//div[@class='inventory_list']//div[1]//div[3]//button[1]");
this.cart = page.locator("svg[role='img']");
    }
async products(){
await this.product.click();
}
async carts(param2){
await this.cart.click();
 
}
}