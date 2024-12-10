
// Defines constant objects for page names and device types, making them immutable using Object.freeze.

/**
 * An enumeration of page names used in the application.
 *
 * @constant
 * @type {object}
 * @property {string} MAIN - Represents the main page, with an empty string as its value.
 * @property {string} LIVE - Represents the live page, with 'live' as its value.
 */
const PageNames = Object.freeze({
    MAIN: '',
    LIVE: 'live',
});

/**
 * An enumeration of device types and their respective screen resolutions.
 *
 * @constant
 * @type {object}
 * @property {string} DESKTOP - Represents desktop devices with a resolution of 1920x1080.
 * @property {string} MOBILE - Represents mobile devices with a resolution of 250x500.
 */
const DeviceTypes = Object.freeze({
    DESKTOP: '1920,1080',
    MOBILE: '250,500',
});

module.exports = { PageNames, DeviceTypes };