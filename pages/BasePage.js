const {expect} = require('chai');
const config = require('../configuration//config');

class BasePage {
    constructor() {
        this.I = actor();
        this.baseUrl = config.baseUrl;
    }

    async navigateTo(path = '') {
        const fullPath = path ? '${this.baseUrl}${path}' : this.baseUrl;
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
            return await this.I.seeElement(selector);
        } catch {
            return false;
        }
    }

    async seeText(selector, expectedText) {
        const text = await this.I.grabTextFrom(selector);
        if (text !== expectedText) {
            throw new Error(`Expected text "${expectedText}" but found "${text}"`);
        }
    }

    async getNumberOfVisibleElements(selector) {
        await this.I.grabNumberOfVisibleElements(selector);
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