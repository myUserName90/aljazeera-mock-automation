const BasePage = require('./BasePage');

class LivePage extends BasePage {
    constructor() {
        super();
        this.playButton = '.vjs-play-control';
        this.switchPlayer='#liveStreamPlayerHelpButton';
        this.player = 'video-js.playing';
    }
    verifyPlayButtonVisibility(){
        this.isElementVisible(this.playButton);
    }

    verifySwitchPlayerButtonVisibility(){
        this.isElementVisible(this.switchPlayer);
    }
    waitForPlayerLoaded(){
        this.waitForElement(this.player);
    }

}

module.exports = LivePage;