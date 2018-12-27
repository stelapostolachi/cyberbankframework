require('../Utilities/customLocators.js');

var BankManagerPage = function(){

   this.addCustomerButton = element(by.ngClick('addCust()'));
   this.openAccount=element(by.ngClick('openAccount()'));
   this.custumers=element(by.ngClick('showCust()'));


   this.firstName=element(by.cssContainingText('.form-group','First Name'));
   this.lastName=element(by.cssContainingText('.form-group','Last Name'));
   this.postCode=element(by.cssContainingText('.form-group','Post'));
   
   

};
module.exports = new BankManagerPage();