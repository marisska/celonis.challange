const navigator = require('../steps/navigator.js');
const reader = require('../steps/reader.js');
const interactor = require('../steps/interactor.js');
const account = require('../account.js');

describe('Health check', function() {
    navigator.navigateTo('/');

    interactor.enterTextByName('email', account.loginData.email);
    interactor.enterTextByName('password', account.loginData.pass);
    interactor.clickButton('Log in');

    it('should show user name', function() {
       reader.shouldReadTextByClass('account-holder', account.loginData.name);
    }); 
});
