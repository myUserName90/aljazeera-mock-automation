// Importing the required assertion libraries from Chai
const {expect, assert} = require('chai');

// Exporting a utility module containing assertion methods
module.exports = {
    /**
     * Asserts that two values are strictly equal.
     *
     * @param {any} actual - The actual value obtained.
     * @param {any} expected - The expected value to compare against.
     * @param {string} message - Custom message to display if the assertion fails.
     */
    assertEqual: (actual, expected, message) => {
        assert.equal(actual, expected, message);
    },

    /**
     * Validates that the actual count matches the expected count.
     *
     * @param {number} actual - The actual count value.
     * @param {number} expected - The expected count value.
     * Displays an error message if the counts do not match.
     */
    expectCount: (actual, expected) => {
        expect(actual).to.equal(expected, `Expected count to be ${expected}, but got ${actual}`);
    },

    /**
     * Asserts that a full string contains a specified fragment.
     *
     * @param {string} fullString - The full string to search within.
     * @param {string} fragment - The substring or fragment expected to be found in the full string.
     * Throws an error with a custom message if the fragment is not found in the full string.
     */
    assertContains: (fullString, fragment) => {
        expect(fullString).to.include(fragment, `"${fullString} doesnt contain "${fragment}" fragment`);
    }
};