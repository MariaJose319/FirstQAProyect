const { Builder, By, Key, until } = require('selenium-webdriver');
/* const InventoryPage = require('./inventory.page'); */

class LoginPage{
    url = 'https://www.saucedemo.com/';
    
    constructor(driver){
        this.driver = driver
    };

    async getTitle(){
        return await this.driver.findElement(By.css('.title')).getText();
    };

    async getErrorMessage(){
        return await this.driver.findElement(By.css('[data-test="error"]')).getText();
    };

    async login(user,password){
        await this.driver.get(this.url);
        await this.driver.findElement(By.css('[data-test="username"]')).sendKeys(user);
        await this.driver.findElement(By.css('[data-test="password"]')).sendKeys(password);
        await this.driver.findElement(By.css('[data-test="login-button"]')).click();
        
        /* return new InventoryPage(this.driver); */
    }
}

module.exports = LoginPage