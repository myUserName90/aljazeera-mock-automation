const BasePage = require('./BasePage');

class MainPage {

    constructor() {
        this.mostPopularSection = '.trending-articles';
        this.mostPopularPosts = '.article-trending.u-clickable-card';
        this.bypassBlockMenu = '.bypass-block-links-container';
        this.mostReadLink = '.container--white [href="#most-read-container"]';
        this.mostPopularAnchor = '#most-popular';
        this.headerBanner = '.site-header'
    }
}
module.exports = MainPage;