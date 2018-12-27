require('../Utilities/customLocators.js');
var BankManager = require('../Pages/BankManager.pages.js')
var homePage = require('../Pages/Home.page.js');
var Base= require('../Utilities/Base.js');
var AddCustumerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');

describe('Bank Manager',()=>{

   describe('Manager Login', () => {
    beforeEach(function(){
        Base.navigateToHome();
    });

    it('Should have correct page title', ()=>{
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

    it('Should display home button', () => {
        expect(homePage.homeButton.isDisplayed()).toBe(true);
        expect(homePage.homeButton.getText()).toEqual('Home');
    });  

    it('Should display page header', () => {
        expect(homePage.pageHeader.isDisplayed()).toBe(true);
        expect(homePage.pageHeader.getText()).toEqual(BankData.appData.bankName);   
    }); 
    
    it('Should display "Bank Manager" button', () => {
        expect(homePage.bankManagerLoginButton.isDisplayed()).toBe(true);
        expect(homePage.bankManagerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('Should click the Home button and stay at the same page', () => {
        homePage.homeButton.click();
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
        expect(homePage.bankManagerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('Should login as Bank Manager', () => {
        homePage.bankManagerLoginButton.click();
        expect(BankManager.addCustomerButton.isDisplayed()).toBe(true);
        expect(BankManager.addCustomerButton.getText()).toEqual('Add Customer')
    });

    it('Should check if add customer is present',()=>{
        homePage.bankManagerLoginButton.click();
        expect(BankManager.openAccount.isDisplayed()).toBe(true);
        expect(BankManager.openAccount.getText()).toEqual('Open Account');
        expect(BankManager.custumers.isDisplayed()).toBe(true);
        expect(BankManager.custumers.getText()).toEqual('Customers');
    });
    it('Should verify home button displayed',()=>{
        homePage.bankManagerLoginButton.click();
        homePage.homeButton.click();
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

    it('should click on open account',()=>{
        homePage.bankManagerLoginButton.click();
        BankManager.addCustomerButton.click();
    });
/*////////////////////////////////////////////////////////////////////////////////////*/
    it('should list first name label in the form',()=>{
        homePage.bankManagerLoginButton.click();
        BankManager.addCustomerButton.click();
        expect(BankManager.firstName.getText()).toEqual('First Name :');
    });

    it('should list last name labe in the form',()=>{
        homePage.bankManagerLoginButton.click();
        BankManager.addCustomerButton.click();
        expect(BankManager.lastName.getText()).toEqual('Last Name :');
    });

    it('should list zip code label in the form',()=>{
        homePage.bankManagerLoginButton.click();
        BankManager.addCustomerButton.click();
        expect(BankManager.postCode.getText()).toEqual('Post Code :');
    });


   });




});