
class BasePage {
    constructor() {
        this.I = actor();
        this.basePath = 'https://www.aljazeera.com/';
    }

    navigateTo(path = '') {
        const fullPath = path ? this.basePath + path : this.basePath;
        this.I.amOnPage(fullPath);
    }


    clickElement(selector) {
        this.I.click(selector);
    }

    clickElementByPosition(selector, xPos = 0, yPos= 0) {
        this.I.click(selector,xPos,yPos);
    }

    fillField(selector, value) {
        this.I.fillField(selector, value);
    }

    waitForElement(selector, timeoutSec = 5) {
        this.I.waitForElement(selector, timeoutSec);
    }

    isElementVisible(selector) {
        this.I.seeElement(selector);
    }

    verifyNumberOfVisibleElements(selector, expectedCount) {
        this.I.seeNumberOfVisibleElements(selector, expectedCount);
    }

    verifyInvisibilityOfElement(selector) {
        this.I.dontSeeElement(selector);
    }

    resizeTheWindow(width, height) {
        this.I.resizeWindow(width, height);
    }

    pressKey(key){
        this.I.pressKey(key);
    }

    verifyUrlFragment(fragment){
        this.I.seeInCurrentUrl(fragment);
    }



}

module.exports = BasePage;