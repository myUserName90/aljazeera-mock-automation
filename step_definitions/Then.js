const MainPage = require('../pages/MainPage');
const mainPage = new MainPage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const LivePage = require('../pages/LivePage');
const livePage = new LivePage();

Then('I should see the "Most Popular" section', () => {
    mainPage.verifyMostPopularSectionVisible();
});

Then('the "Most Popular" section should contain {int} posts', (postCount) => {
    mainPage.verifyMostPopularPostsCount(postCount);
});

Then('the "Most Popular" section should not be visible', () => {
    mainPage.verifyMostPopularSectionNotVisible();
});

Then('I should be able to navigate to the "Most Read" section', () => {
    mainPage.verifyNavigatedToMostReadSection();
});

Then('the "Bypass Blocks" menu should be visible', () => {
    mainPage.verifyBypassMenuVisibility();
});

Then('the URL should change to include {string}', (urlFragment) => {
    basePage.verifyUrlFragment(urlFragment);
})

Then('Player should be visible', () => {
    livePage.verifyPlayButtonVisibility()
})

Then('the "Switch Player" button should be visible', () => {
    livePage.verifySwitchPlayerButtonVisibility();
})