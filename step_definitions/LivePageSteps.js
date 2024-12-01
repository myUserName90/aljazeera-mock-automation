const LivePage = require('../pages/LivePage');
const livePage = new LivePage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();
const { expect } = require('chai');


When('Video player is loaded', async () => {
    await basePage.waitForElement(livePage.player);
})

Then('Player should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.player);
    expect(isVisible, 'The video player should be visible').to.be.true;
})

Then('the "Switch Player" button should be visible', async () => {
    const isVisible = await basePage.isElementVisible(livePage.switchPlayer);
    expect(isVisible, 'The "Switch Player" button should be visible').to.be.true;
})