const BasePage = require('./BasePage');

class MainPage extends BasePage {

    constructor() {
        super();
        this.mostPopularSection = '.trending-articles';
        this.mostPopularPosts = '.article-trending.u-clickable-card';
        this.bypassBlockMenu = '.bypass-block-links-container';
        this.mostReadLink = '.container--white [href="#most-read-container"]';
        this.mostPopularAnchor = '#most-popular';
        this.headerBanner = '.site-header'
    }

    verifyMostPopularSectionVisible() {
        this.isElementVisible(this.mostPopularSection);
    }


    verifyMostPopularPostsCount(expectedCount) {
        this.verifyNumberOfVisibleElements(this.mostPopularPosts, expectedCount);
    }


    verifyMostPopularSectionNotVisible() {
        this.verifyInvisibilityOfElement(this.mostPopularSection);
    }

    verifyNavigatedToMostReadSection() {
        this.isElementVisible(this.mostPopularAnchor);
    }

    clickOnWhiteSpaceOfHeader(){
        this.clickElementByPosition(this.headerBanner,0,0);
    }
    verifyBypassMenuVisibility(){
        this.waitForElement(this.bypassBlockMenu);
        this.isElementVisible(this.bypassBlockMenu);
    }

    clickOnMostReadLinkOption(){
        this.waitForElement(this.mostReadLink);
        this.clickElement(this.mostReadLink);
    }

}
module.exports = MainPage;