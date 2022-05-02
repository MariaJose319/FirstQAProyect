const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const { assert } = require('chai');
const LoginPage = require('./../src/login.page')
const InventoryPage = require('./../src/inventory.page');

describe('Inventory Page', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    describe('Link of a item title', function () {
        it('should navigate to the item details page', async function () {
            const loginPage = new LoginPage(driver);
            await loginPage.login('standard_user', 'secret_sauce');
            const inventoryPage = new InventoryPage(driver);
            let itemInventory = await inventoryPage.selectTitleItem();
            assert.equal(await inventoryPage.getTitleItemDetails(), itemInventory);
        });
    });

    afterEach(async function () {
        await driver.quit();
    });
});