const navigator = require('../steps/navigator.js');
const reader = require('../steps/reader.js');
const interactor = require('../steps/interactor.js');
const account = require('../account.js');

describe('Health check', function() {
    navigator.navigateTo('/');

        
    it('should show user name', function() {
        interactor.enterTextByName('email', account.loginData.email);
        interactor.enterTextByName('password', account.loginData.pass);
        interactor.clickButton('Log in');

        reader.shouldReadTextByClass('account-holder', account.loginData.name);
     }); 
    
    it('should show Purchase to pay process', function() {
        interactor.clickByClass('project-item-name', 'Example Projects');
        interactor.clickByClass('action-bar__item', 'Open');
        interactor.clickByClass('project-item-name','1. Purchase to Pay');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','Purchase to pay process');
    });

    it('should show Accounts payable process', function() {
        browser.navigate().back();

        interactor.clickByClass('project-item-name','2. Accounts Payable');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','Accounts payable process');
    });

    it('should show Order to cash process', function() {
        browser.navigate().back();

        interactor.clickByClass('project-item-name','3. Order to Cash');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','Order to cash process');
    });

    it('should show IT Service Management process', function() {
        browser.navigate().back();

        interactor.clickByClass('project-item-name','4. IT Service Management');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','IT Service Management process');
    });

    it('should show Logistics process', function() {
        browser.navigate().back();

        interactor.clickByClass('project-item-name','5. Logistics');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','Logistics process');
    });

    it('should show Human resources payable process', function() {
        browser.navigate().back();

        interactor.clickByClass('project-item-name','6. Human Resources');
        interactor.clickByClass('action-bar__item', 'Open');
     
        reader.shouldReadTextByClass('ce-component-title','Human resources process');
    });
});