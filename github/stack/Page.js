var Browser = require('./Browser')

function Page(baseurl){
    this.baseurl = baseurl
}

Page.prototype.setBaseURL = function(url){
    this.baseurl = url
    return this
}

Page.prototype.navigate = function(url){
    if (url){
        this.lasturl = url 
    } else {
        url = this.baseurl
    }
    if (!this.browser){
        this.browser = new Browser()
    }
    this.page = this.browser.handle.url(url)
        return this
}

function test(){
    new Page('www.github.com').navigate();
    console.log("hit made")
}

module.exports = Page

if (require.main === module) {
    test();
}

