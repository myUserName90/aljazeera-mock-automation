const LivePage = require('../pages/LivePage');
const livePage = new LivePage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const {expect} = require('chai');


Then('Player should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.player);
    expect(isVisible, 'The video player should be visible').to.be.true;
})

Then('the "Switch Player" button should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.switchPlayer);
    expect(isVisible, 'The "Switch Player" button should be visible').to.be.true;
});

Then('the "Switch Player" button text should be {string}', async (expectedText) => {
    const actualText = await basePage.getText(livePage.switchPlayer);
    console.log('Switch Player Button Text:', actualText);
    expect(actualText).to.equal(expectedText, `Expected ${expectedText} posts, but found ${actualText}`);
});
Then('the Player should not be in a loading state', async () => {
    const isLoading = await basePage.isElementLoading(livePage.player);
    console.log('Player Opacity:', isLoading);
    expect(parseFloat(isLoading), 'The player should not be in a loading state').to.equal(1);
});

When('I click the "Switch Player" button', async () => {
    await basePage.clickElement(livePage.switchPlayer);
});
Then('the Player should switch', async () => {
   const isVisible = await basePage.isElementVisible(livePage.youtubePlayer);
    expect(isVisible, 'Youtube player should be visible.').to.be.true;

})

