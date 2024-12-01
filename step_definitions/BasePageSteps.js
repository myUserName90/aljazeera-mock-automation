const {PageNames, DeviceTypes} = require('../helper/constants.js');
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();


Given('I am on the {string} page with window size {string}', async (pageName, deviceType) => {
    let path = '';
    if (pageName in PageNames) {
        path = PageNames[pageName];
    } else {
        throw new Error(`${pageName} is not a valid page name`);
    }
    await basePage.navigateTo(path);

    if (deviceType in DeviceTypes) {
        const [width, height] = DeviceTypes[deviceType].split(',').map(Number);
        await basePage.resizeTheWindow(width, height);
    } else {
        throw new Error(`${deviceType} is not a valid device type`);
    }
});



When('I press the {string} key',  async (key) => {
    await basePage.pressKey(key);
});

Then('the URL should change to include {string}',async (urlFragment) => {
    await basePage.verifyUrlFragment(urlFragment);
});







