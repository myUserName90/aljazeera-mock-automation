const MainPage = require('../pages/MainPage');
const mainPage = new MainPage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const { expect } = require('chai');



Then('I should see the "Most Popular" section', async () => {
    const isVisible = await basePage.isElementVisible(mainPage.mostPopularSection);
    expect(isVisible, 'The "Most Popular" section should be visible').to.be.true;
});

When('I click on the empty white space on the left side of the website\'s logo', async () => {
    await basePage.clickElementByPosition(mainPage.headerBanner,0,0);
});

When('I click the "Skip to Most Read" option in the "Bypass Blocks" menu', async () => {
    await basePage.clickElement(mainPage.mostReadLink);
});

Then('the "Most Popular" section should contain {int} posts', async (postCount) => {
    const actualCount = await basePage.getNumberOfVisibleElements(mainPage.mostPopularPosts);
    expect(actualCount, `Expected ${postCount} posts, but found ${actualCount}`).to.equal(postCount);
});

Then('the "Most Popular" section should not be visible',async () => {
    const isVisible = await basePage.isElementVisible(mainPage.mostPopularSection);
    expect(isVisible, 'The "Most Popular" section should not be visible').to.be.false;
});

Then('I should be able to navigate to the "Most Read" section', async () => {
    await basePage.isElementVisible(mainPage.mostPopularAnchor);
});

Then('the "Bypass Blocks" menu should be visible', async () => {
    await basePage.isElementVisible(mainPage.bypassBlockMenu);
});

