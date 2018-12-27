require('../Utilities/customLocators.js');
var BankManager = require('../Pages/BankManager.pages.js')
var homePage = require('../Pages/Home.page.js');
var Base= require('../Utilities/Base.js');
var AddCustumerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');


var using = require('jasmine-data-provider');


describe('Jasmine Data Provider ', () => {

    beforeAll(function(){
        Base.navigateToHome();
        homePage.bankManagerLoginButton.click();
        AddCustumerPage.goToAddCustumer();
    });

    function dataProvider(){
        return [
        {fName:"Elon", lName:'Musk',pCode:'334455'},
        {fName:"Warren", lName:'Buffet',pCode:'112233'},
        {fName:"Amanico", lName:'Ortega',pCode:'112233'}
    ]};

    using(dataProvider, function(data){
        it('should add customer: '+data.fName+' '+data.lName, () => {            
                AddCustumerPage.firstNameInputBox.sendKeys(data.fName);
                AddCustumerPage.lastNameInputBox.sendKeys(data.lName);
                AddCustumerPage.postalCodeInputBox.sendKeys(data.pCode);
                AddCustumerPage.formAddCustumerButton.click();
                expect(browser.switchTo().alert().getText()).
                toContain('Customer added successfully with customer id :');
                browser.switchTo().alert().accept();
                BankManager.custumers.click();
                expect(Customers.getLastRowValue(1).getText()).toEqual(data.fName);
                expect(Customers.getLastRowValue(2).getText()).toEqual(data.lName);
                expect(Customers.getLastRowValue(3).getText()).toEqual(data.pCode);
                AddCustumerPage.goToAddCustumer();
        });    
    });               
});