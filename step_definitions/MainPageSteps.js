const MainPage = require('../pages/MainPage');
const mainPage = new MainPage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();


Then('I should see the "Most Popular" section', async () => {
    await basePage.seeElement(mainPage.mostPopularSection)
});

When('I click on the empty white space on the left side of the website\'s logo', async () => {
    await basePage.clickElementByPosition(mainPage.headerBanner,0,0);
});

When('I click the "Skip to Most Read" option in the "Bypass Blocks" menu', async () => {
    await basePage.clickElement(mainPage.mostReadLink);
});

Then('the "Most Popular" section should contain {int} posts', async (postCount) => {
    await basePage.verifyNumberOfVisibleElements(mainPage.mostPopularPosts, postCount);
});

Then('the "Most Popular" section should not be visible',async () => {
    await basePage.verifyInvisibilityOfElement(mainPage.mostPopularSection);
});

Then('I should be able to navigate to the "Most Read" section', async () => {
    await basePage.seeElement(mainPage.mostPopularAnchor);
});

Then('the "Bypass Blocks" menu should be visible', async () => {
    await basePage.seeElement(mainPage.bypassBlockMenu);
});

