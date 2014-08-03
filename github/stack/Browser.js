var webdriverjs = require('../../index')

module.exports = function Browser(reqBrowserName){
    if (reqBrowserName){
        this.reqBrowserName = reqBrowserName
    } else {
        this.reqBrowserName = 'phantomjs'
    }
    this.handle = webdriverjs.remote({ desiredCapabilities: {browserName: this.reqBrowserName} });
    this.handle.init();
}

