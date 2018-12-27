require('../Utilities/customLocators.js');
var BankManagerPages = require('./BankManager.pages.js')

var AddCustumerPage=function(){
    this.formlabels =$$('.form-group>label');
    this.firstNameInputBox=element(by.model('fName'));
    this.lastNameInputBox=element(by.model('lName'));
    this.postalCodeInputBox=element(by.model('postCd'));
    this.formRequiredFields=element.all(by.css('input:required'));
    this.formAddCustumerButton=$('.btn-default');
    this.custumerForm=element(by.name('myForm'));



    

    this.goToAddCustumer = function(){
        BankManagerPages.addCustomerButton.click();

    }

    
}
module.exports = new AddCustumerPage();
