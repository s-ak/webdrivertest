var webdriverjs = require('../index'),
    assert      = require('assert');

function Page(){
    console.log("page made")
}
Page.constructor = Page

Page.prototype.set = function(url){
    this.url = url
}


describe('my webdriverjs tests', function(){

        this.timeout(99999999);
        var handle = {};

        before(function(done){
            handle = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
            handle.init(done);
            page = new Page()
            page.browser = handle
            });

        it('Github test',function(done) {
            handle
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                assert(err === null);
                assert(result.height === 32);
                assert(result.width  === 89);
                })
            .getTitle(function(err, title) {
                console.log(title)
                assert(err === null);
                assert(title === 'GitHub · Build software better, together.');
                handle.title = title
                })
            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
                assert(err === null);
                assert(result === 'rgba(65,131,196,1)');
                })
            .call(done);
            });

        after(function(done) {
                handle.end(done);
                });
});
