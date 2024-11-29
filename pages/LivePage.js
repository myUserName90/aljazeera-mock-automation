const BasePage = require('./BasePage');

class LivePage {
    constructor() {
        this.playButton = '.vjs-play-control';
        this.switchPlayer='#liveStreamPlayerHelpButton';
        this.player = 'video-js.playing';
    }

}

module.exports = LivePage;