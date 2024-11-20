const {PageNames, DeviceTypes} = require('../helper/constants.js');
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();


Given('I am on the {string} page with window size {string}', (pageName, deviceType) => {
    let path = '';
    if (pageName in PageNames) {
        path = PageNames[pageName];
    } else {
        throw new Error(`${pageName} is not a valid page name`);
    }
    basePage.navigateTo(path);

    if (deviceType in DeviceTypes) {
        const [width, height] = DeviceTypes[deviceType].split(',').map(Number);
        console.log('device size:' + `${width} ${height}`);
        basePage.resizeTheWindow(width, height);
    } else {
        throw new Error(`${deviceType} is not a valid device type`);
    }
});









