const {Builder, By, Key, until} = require('selenium-webdriver');
const chai=require('chai');
const {assert}=require('chai');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.saucedemo.com/'); //ingresa la pagina

    let userName = await driver.findElement(By.css('[data-test="username"]'));
    let password = await driver.findElement(By.css('[data-test="password"]'));
    let loginButton = await driver.findElement(By.css('[data-test="login-button"]'));

    await userName.sendKeys('standard_user');
    await password.sendKeys('secret_sauce');
    await loginButton.click();

    let titleInventory = await driver.findElement(By.css('.title')).getText();
    assert.equal(titleInventory, 'PRODUCTS');
})();