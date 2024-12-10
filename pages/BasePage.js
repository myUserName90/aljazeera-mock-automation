const config = require('../configuration/config'); // Configuration file for base settings
const {assertContains} = require("../helper/utils/assertions"); // Custom assertion helper

/**
 * BasePage class provides common actions and utilities for interacting with web pages.
 * All other page objects should extend this class to inherit its functionality.
 */
class BasePage {
    constructor() {
        this.I = actor();  // CodeceptJS actor for interacting with the page
        this.baseUrl = config.baseUrl; // Base URL of the application, sourced from configuration
    }

    /**
     * Navigates to a specified path relative to the base URL.
     *
     * @param {string} path - The relative path to navigate to. Defaults to the base URL if not provided.
     */
    async navigateTo(path = '') {
        const formattedPath = path.startsWith('/') ? path : `/${path}`;
        const fullPath = path ? `${this.baseUrl}${formattedPath}` : this.baseUrl;
        console.log(`Navigating to: ${fullPath}`);
        await this.I.amOnPage(fullPath);
    }

    /**
     * Retrieves the current URL of the browser.
     *
     * @returns The current URL.
     */
    async getCurrentUrl() {
        return this.I.grabCurrentUrl();
    }

    /**
     * Clicks an element after ensuring it is visible.
     *
     * @param {string} selector - The selector for the element to click.
     */
    async clickElement(selector) {
        await this.waitForElement(selector);
        await this.I.click(selector);
    }

    /**
     * Clicks an element at a specified position.
     *
     * @param {string} selector - The selector for the element to click.
     * @param {number} xPos - The x-coordinate for the click position. Defaults to 0.
     * @param {number} yPos - The y-coordinate for the click position. Defaults to 0.
     */
    async clickElementByPosition(selector, xPos = 0, yPos = 0) {
        await this.I.click(selector, xPos, yPos);
    }

    /**
     * Fills a field with a specified value.
     *
     * @param {string} selector - The selector for the field.
     * @param {string} value - The value to enter into the field.
     */
    async fillField(selector, value) {
        await this.I.fillField(selector, value);
    }

    /**
     * Waits for an element to be visible within a timeout period.
     *
     * @param {string} selector - The selector for the element.
     * @param {number} timeoutSec - The maximum time to wait in seconds. Defaults to 5 seconds.
     */
    async waitForElement(selector, timeoutSec = 5) {
        await this.I.waitForElement(selector, timeoutSec);
    }

    /**
     * Checks if an element is visible on the page.
     *
     * @param {string} selector - The selector for the element.
     * @returns True if the element is visible, false otherwise.
     */
    async isElementVisible(selector) {
        try {
            const elementCount = await this.I.grabNumberOfVisibleElements(selector)
            return elementCount > 0;
        } catch {
            return false;
        }
    }

    /**
     * Retrieves the loading state (opacity) of an element.
     *
     * @param {string} selector - The selector for the element.
     * @returns  The value of the `opacity` CSS property.
     */
    async isElementLoading(selector) {
        return this.I.grabCssPropertyFrom(selector, 'opacity');
    }

    /**
     * Retrieves the text content of an element.
     *
     * @param {string} selector - The selector for the element.
     * @returns  The text content of the element.
     */
    async getText(selector) {
        return this.I.grabTextFrom(selector);
    }

    /**
     * Retrieves the text content of all elements matching the selector.
     *
     * @param {string} selector - The selector for the elements.
     * @returns An array of text contents from the matching elements.
     */
    async getTexts(selector) {
        return this.I.grabTextFromAll(selector);
    }

    /**
     * Retrieves the number of visible elements matching the selector.
     *
     * @param {string} selector - The selector for the elements.
     * @returns The number of visible elements.
     */
    async getNumberOfVisibleElements(selector) {
        return this.I.grabNumberOfVisibleElements(selector);
    }

    /**
     * Resizes the browser window to the specified dimensions.
     *
     * @param {number} width - The width of the window.
     * @param {number} height - The height of the window.
     */

    async resizeTheWindow(width, height) {
        await this.I.resizeWindow(width, height);
    }

    /**
     * Simulates pressing a key.
     *
     * @param {string} key - The key to press.
     */
    async pressKey(key) {
        await this.I.pressKey(key);
    }

    /**
     * Verifies that the current URL contains a specified fragment.
     *
     * @param {string} fragment - The URL fragment to check.
     */
    async verifyUrlFragment(fragment) {
        const currentUrl = await this.getCurrentUrl();
        assertContains(currentUrl, fragment);
    }

    /**
     * Retrieves a specific attribute value from an element.
     *
     * @param {string} selector - The selector for the element.
     * @param {string} value - The attribute to retrieve.
     * @returns {Promise<string>} The value of the specified attribute.
     */
    async getElementAttribute(selector, value) {
        return this.I.grabAttributeFrom(selector, value);
    }


}

module.exports = BasePage;