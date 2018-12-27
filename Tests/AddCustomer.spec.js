require('../Utilities/customLocators.js');
var BankManager = require('../Pages/BankManager.pages.js')
var homePage = require('../Pages/Home.page.js');
var Base= require('../Utilities/Base.js');
var AddCustumerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');

describe('Add Cusomer',()=>{

    describe('Adding a Customer',()=>{
        beforeAll(function(){
            Base.navigateToHome();
            homePage.bankManagerLoginButton.click();
            AddCustumerPage.goToAddCustumer();
        });
 
 
       it('Should display form for Adding Custumer',()=>{
           expect(AddCustumerPage.custumerForm.isDisplayed()).toBe(true);
           expect(AddCustumerPage.formlabels.count()).toEqual(3);
 
        });
 
        it('Should list all the labels',()=>{
            expect(AddCustumerPage.formlabels.get(0).getText()).toEqual('First Name :');
            expect(AddCustumerPage.formlabels.get(1).getText()).toEqual('Last Name :');
            expect(AddCustumerPage.formlabels.get(2).getText()).toEqual('Post Code :');
        });
 
        it('should require firstname',()=>{
            expect(AddCustumerPage.formRequiredFields.get(0).getAttribute('required')).toEqual('true');
        });
 
        it('should require lastname',()=>{
         expect(AddCustumerPage.formRequiredFields.get(1).getAttribute('required')).toEqual('true');
 
        });
 
        it('should require postcode',()=>{
         expect(AddCustumerPage.formRequiredFields.get(2).getAttribute('required')).toEqual('true');
        });
       
        it('should Add Custumer',()=>{
            
                AddCustumerPage.firstNameInputBox.sendKeys(BankData.customers[0].fName);
                AddCustumerPage.lastNameInputBox.sendKeys(BankData.customers[0].lName);
                AddCustumerPage.postalCodeInputBox.sendKeys(BankData.customers[0].pCode);
                AddCustumerPage.formAddCustumerButton.click();
                expect(browser.switchTo().alert().getText()).toContain('Customer added successfully with customer id');
                browser.switchTo().alert().accept();
                
             
        });
 
        it('should display new custumer first name that was created',()=>{
         BankManager.custumers.click();
         expect(Customers.getLastRowValue(1).getText()).toEqual('Mark');
 
        });
 
        it('should display new custumer last name that was created',()=>{
         expect(Customers.getLastRowValue(2).getText()).toEqual('Zuckerberg');
        });
 
        it('should display new custumer post code that was created',()=>{
         expect(Customers.getLastRowValue(3).getText()).toEqual('21005');
        });
 

 
 
 
    });
 

});




// describe('Add Cusomer',()=>{

//     describe('Adding a Customer',()=>{
//         beforeAll(function(){
//             Base.navigateToHome();
//             homePage.bankManagerLoginButton.click();
//             AddCustumerPage.goToAddCustumer();
//         });
 
 
//        it('Should display form for Adding Custumer',()=>{
//            expect(AddCustumerPage.custumerForm.isDisplayed()).toBe(true);
//            expect(AddCustumerPage.formlabels.count()).toEqual(3);
 
//         });
 
//         it('Should list all the labels',()=>{
//             for (var i = 0; i < BankData.customers.length; i++) {
                
//                 AddCustumerPage.firstNameInputBox.sendKeys(BankData.customers[i].fName);
//                 AddCustumerPage.lastNameInputBox.sendKeys(BankData.customers[i].lName);
//                 AddCustumerPage.postalCodeInputBox.sendKeys(BankData.customers[i].pCode);
//                 AddCustumerPage.formAddCustomerButton.click();
//                 expect(browser.switchTo().alert().getText()).toContain('Customer added successfully with customer id :');
//                 BankManager.custumers.click();
//                 expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[i].fName);
//                 expect(Customers.getLastRowValue(2).getText()).toEqual(BankData.customers[i].lName);
//                 expect(Customers.getLastRowValue(3).getText()).toEqual(BankData.customers[i].pCode);
//             }
     
//         });

        
 
//     });
 

// });

