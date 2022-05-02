const { Builder, By, Key, until } = require('selenium-webdriver');
const LoginPage = require('./login.page')

class InventoryPage {
    constructor(driver) {
        this.driver = driver
    };

    async getTitleItemDetails() {
        return await this.driver.findElement(By.css('.inventory_details_name')).getText();
    };

    async selectTitleItem() {
        let randomItem = '#item_'+Math.floor(Math.random()*7)+'_title_link';
        let item = await this.driver.findElement(By.css(randomItem)).getText()
        await this.driver.findElement(By.css(randomItem)).click();
        return item;
        //+Math.floor(Math.random()*7)+
    };
}

module.exports = InventoryPage