const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const { assert } = require('chai');
const LoginPage = require('./../src/login.page')

describe('Login Page', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    describe('Valid User and Password', function () {        
        it('should navigate to the inventory page', async function () {
            this.timeout(8000);
            const page = new LoginPage(driver);
            await page.login('performance_glitch_user', 'secret_sauce');            
            await driver.wait(until.urlContains('inventory.html'), 5000); // Explicit Wait
            /* await setTimeout(()=>{
                console.log('Waiting');
                },7000); 
                not recommended - Implicit Wait*/
            assert.equal(await page.getTitle(), 'PRODUCTS');
        });
    });

    describe('Invalid User', function () {
        it('should not navigate to the inventory page', async function () {
            const page = new LoginPage(driver);
            await page.login('max123', 'secret_sauce');
            assert.equal(await page.getErrorMessage(), 'Epic sadface: Username and password do not match any user in this service');
        });
    });

    describe('Invalid Password', function () {
        it('should not navigate to the inventory page', async function () {
            const page = new LoginPage(driver);
            await page.login('standard_user', '12345');
            assert.equal(await page.getErrorMessage(), 'Epic sadface: Username and password do not match any user in this service');
        });
    });

    describe('Invalid User and Password', function () {
        it('should not navigate to the inventory page', async function () {
            const page = new LoginPage(driver);
            await page.login('max123', '12345');
            assert.equal(await page.getErrorMessage(), 'Epic sadface: Username and password do not match any user in this service');
        });
    });

    

    afterEach(async function () {
        await driver.quit();
    });
});