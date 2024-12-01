const {expect} = require('chai');
const config = require('../configuration/config');

class BasePage {
    constructor() {
        this.I = actor();
        this.baseUrl = config.baseUrl;
    }

    async navigateTo(path = '') {
        const formattedPath = path.startsWith('/') ? path : `/${path}`;
        const fullPath = path ? `${this.baseUrl}${formattedPath}` : this.baseUrl;
        console.log(`Navigating to: ${fullPath}`);
        await this.I.amOnPage(fullPath);
    }

    async getCurrentUrl(){
        return this.I.grabCurrentUrl();
    }


    async clickElement(selector) {
        await this.waitForElement(selector);
        await this.I.click(selector);
    }

    async clickElementByPosition(selector, xPos = 0, yPos = 0) {
        await this.I.click(selector, xPos, yPos);
    }

    async fillField(selector, value) {
        await this.I.fillField(selector, value);
    }

    async waitForElement(selector, timeoutSec = 5) {
        await this.I.waitForElement(selector, timeoutSec);
    }

    async isElementVisible(selector) {
        try {
            const elementCount = await this.I.grabNumberOfVisibleElements(selector)
            return elementCount > 0;
        } catch {
            return false;
        }
    }

    async getText(selector) {
        return this.I.grabTextFrom(selector);
    }

    async getTexts(selector) {
        return this.I.grabTextFromAll(selector);
    }

    async getNumberOfVisibleElements(selector) {
        return this.I.grabNumberOfVisibleElements(selector);
    }


    async resizeTheWindow(width, height) {
        await this.I.resizeWindow(width, height);
    }

    async pressKey(key) {
        await this.I.pressKey(key);
    }

    async verifyUrlFragment(fragment) {
        const currentUrl = await this.getCurrentUrl();
        expect(currentUrl).to.include(fragment, `Expected URL to include "${fragment}", but got "${currentUrl}"`);
    }


}

module.exports = BasePage;