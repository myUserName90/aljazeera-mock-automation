const LivePage = require('../pages/LivePage');
const livePage = new LivePage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const {assertEqual} = require("../helper/utils/assertions");

Then('Player should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.player);
    expect(isVisible, 'The video player should be visible').to.be.true;
})

Then('the "Switch Player" button should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.switchPlayer);
    assertEqual(isVisible,true,'The "Switch Player" button should be visible');
});

Then('the "Switch Player" button text should be {string}', async (expectedText) => {
    const actualText = await basePage.getText(livePage.switchPlayer);
    console.log('Switch Player Button Text:', actualText);
    assertEqual(actualText, expectedText, `Expected ${expectedText} posts, but found ${actualText}`);
});
Then('the Player should not be in a loading state', async () => {
    const isLoading = await basePage.isElementLoading(livePage.player);
    console.log('Player Opacity:', isLoading);
    assertEqual(parseFloat(isLoading),1,'The player should not be in a loading state');
});

When('I click the "Switch Player" button', async () => {
    await basePage.clickElement(livePage.switchPlayer);
});
Then('the Player should switch', async () => {
   const isVisible = await basePage.isElementVisible(livePage.youtubePlayer);
   assertEqual(isVisible,true,'Youtube player should be visible.');
})

