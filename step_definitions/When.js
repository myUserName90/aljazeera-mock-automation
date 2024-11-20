const MainPage = require('../pages/MainPage');
const mainPage = new MainPage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const LivePage = require('../pages/LivePage');
const livePage = new LivePage();

When('I click on the empty white space on the left side of the website\'s logo', () => {
    mainPage.clickOnWhiteSpaceOfHeader();
});

When('I press the {string} key',  (key) => {
    basePage.pressKey(key);
});

When('I click the "Skip to Most Read" option in the "Bypass Blocks" menu', () => {
    mainPage.clickOnMostReadLinkOption();
});

When('Video player is loaded', () => {
    livePage.waitForPlayerLoaded();
})

