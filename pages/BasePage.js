class BasePage {
    constructor() {
        this.I = actor();
        this.basePath = 'https://www.aljazeera.com/';
    }

    async navigateTo(path = '') {
        const fullPath = path ? this.basePath + path : this.basePath;
        await this.I.amOnPage(fullPath);
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

    async seeElement(selector) {
        await this.waitForElement(selector);
        await this.I.seeElement(selector);
    }

    async seeText(selector, expectedText) {
        const text = await this.I.grabTextFrom(selector);
        if (text !== expectedText) {
            throw new Error(`Expected text "${expectedText}" but found "${text}"`);
        }
    }

    async verifyNumberOfVisibleElements(selector, expectedCount) {
        await this.I.seeNumberOfVisibleElements(selector, expectedCount);
    }

    async verifyInvisibilityOfElement(selector) {
        await this.I.dontSeeElement(selector);
    }

    async resizeTheWindow(width, height) {
        await this.I.resizeWindow(width, height);
    }

    async pressKey(key) {
        await this.I.pressKey(key);
    }

    async verifyUrlFragment(fragment) {
        await this.I.seeInCurrentUrl(fragment);
    }


}

module.exports = BasePage;