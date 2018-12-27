var Base = function(){
    this.homeUrl= 'http://www.way2automation.com/angularjs-protractor/banking/#/login'
    this.navigateToHome=function(homeUrl){
        browser.get(this.homeUrl);
    }

}
module.exports= new Base();


