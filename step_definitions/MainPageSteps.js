const MainPage = require('../pages/MainPage');
const mainPage = new MainPage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const {assertEqual, expectCount} = require("../helper/utils/assertions");

Then('I should see the "Most Popular" section', async () => {
    const isVisible = await basePage.isElementVisible(mainPage.mostPopularSection);
    assertEqual(isVisible,true,'The "Most Popular" section should be visible');
});

When('I click on the empty white space on the left side of the website\'s logo', async () => {
    await basePage.clickElementByPosition(mainPage.headerBanner, 0, 0);
});

When('I click the "Skip to Most Read" option in the "Bypass Blocks" menu', async () => {
    await basePage.clickElement(mainPage.mostReadLink);
});

Then('the "Most Popular" section should contain {int} posts', async (postCount) => {
    const actualCount = await basePage.getNumberOfVisibleElements(mainPage.mostPopularPosts);
    expectCount(actualCount,postCount);
});

Then('the "Most Popular" section should not be visible', async () => {
    const isVisible = await basePage.isElementVisible(mainPage.mostPopularSection);
    assertEqual(isVisible,false,'The "Most Popular" section should be visible');
});

Then('I should be able to navigate to the "Most Read" section', async () => {
    const isVisible = await basePage.isElementVisible(mainPage.mostPopularAnchor);
    assertEqual(isVisible,true,'The "Most Popular" section should be visible');
});

Then('the "Bypass Blocks" menu should be visible', async () => {
    const isVisible = await basePage.isElementVisible(mainPage.bypassBlockMenu);
    assertEqual(isVisible,true,'The "Bypass Blocks" section should be visible');
});

Then('the "Most Popular" section header should be {string}', async (expectedText) => {
    await basePage.isElementVisible(mainPage.mostPopularAnchor);
    const actualText = await basePage.getText(mainPage.mostPopularHeader);
    console.log('Actual Text:' + actualText)
    assertEqual(actualText,expectedText,`Expected ${expectedText} posts, but found ${actualText}`);
});
Then('the "Most Popular" section should not be empty', async () => {
    const postTitles = await basePage.getTexts(mainPage.mostPopularPosts);

    expect(postTitles, 'The "Most Popular" section should not be empty').to.be.an('array').that.is.not.empty;

    postTitles.forEach((title, index) => {
        expect(title, `Post ${index + 1} should have a title`).to.not.be.null;
    })
});


