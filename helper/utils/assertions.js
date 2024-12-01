const { expect, assert } = require('chai');

module.exports = {
    assertEqual: (actual, expected, message) => {
        assert.equal(actual, expected, message);
    },
    expectVisible: (element) => {
        expect(element).to.be.visible;
    },
    expectCount: (actual, expected) => {
        expect(actual).to.equal(expected, `Expected count to be ${expected}, but got ${actual}`);
    },
};