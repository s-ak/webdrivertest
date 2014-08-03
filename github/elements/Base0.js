var Page = require('../stack/Page'),
    assert      = require('assert');
fs = require("fs");

function Base0(){
    console.log("base 0 element made")
};
Base0.constructor = Base0;
Base0.prototype = new Page();

Base0.prototype.init = function(url){
    this.url = url;
    var jsonfile = 'Base0.json';
    content = {'elements':{'.header-logo-wordmark':{'asserts':{'height' : 32,'width':89}}},'css':{{'a[href="/plans"]':{'asserts':{'height' : 32,'width':89}}}};
    /*var file = (JSON.parse(fs.readFileSync(jsonfile, 'utf8')));*/
    /*this.homeLink = ['.header-logo-wordmark','class'];*/
    this.setBaseURL(url)
        return this
};
module.exports = Base0

describe('home link', function(){

        this.timeout(99999999);
        var handle = {};
        /*this.element = new Base0()*/

        before(function(done){
            console.log("base 0 element made 0")
            this.base0 = new Base0().init('https://github.com/')
            this.section = this.base0.navigate()
            console.log("base 0 element made")
            done()
            });

        it('Github test',function(done) {
            /*handle*/
            /*.url('https://github.com/')*/

            this.base0.page
            .getElementSize('.header-logo-wordmark', function(err, result) {
                assert(err === null);
                assert(result.height === 32);
                assert(result.width  === 89);
                })
            .getTitle(function(err, title) {
                console.log(title)
                assert(err === null);
                console.log("title")
                console.log(title)
                assert(title === 'GitHub · Build software better, together.');
                handle.title = title
                })
            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
                assert(err === null);
                /*assert(result === 'rgba(65,131,196,1)');*/
                })
            .call(done);
        });

        after(function(done) {
                this.base0.browser.handle.end(done);
                });
});
