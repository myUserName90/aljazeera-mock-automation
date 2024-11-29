const LivePage = require('../pages/LivePage');
const livePage = new LivePage();
const BasePage = require('../pages/BasePage');
const basePage = new BasePage();

When('Video player is loaded', async () => {
    await basePage.waitForElement(livePage.player);
})

Then('Player should be visible', async () => {
    await basePage.seeElement(livePage.playButton);
})

Then('the "Switch Player" button should be visible', async () => {
    await basePage.seeElement(livePage.switchPlayer);
})