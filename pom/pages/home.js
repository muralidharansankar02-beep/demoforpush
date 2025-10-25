import { test, expect } from '@playwright/test';
const {expect} = require('@playwright/test')

exports.HomePage = class HomePage{
    /**
     * 
     * @param {import ('@playwright/test').page} page 
     */
    constructor(page){
this.page = page;
this.unsername = page.locator("#user-name");
this.unserpassword = page.locator("#password");
this.unserlogin = page.locator("#login-button");

    }
async goto(){
    await this.page.goto("https://www.saucedemo.com/v1/");
}
async unsernames(param1){
await this.unsername.fill(param1);
}
async unserpasswords(param2){
await this.unserpassword.fill(param2);
}
async unserlogins(param3){
await this.unserlogin.click();
}}