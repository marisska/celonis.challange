const navigator = require('../steps/navigator.js');
const reader = require('../steps/reader.js');
const interactor = require('../steps/interactor.js');
const account = require('../account.js');

describe('Health check', function() {
    navigator.navigateTo('/');

    interactor.enterTextByName('email', account.loginData.email);
    interactor.enterTextByName('password', account.loginData.pass);
    interactor.clickButton('Log in');
       
    interactor.clickByClass('project-item-name', 'Example Projects');
    interactor.clickByClass('action-bar__item', 'Open');
    interactor.clickByClass('project-item-name','1. Purchase to Pay');
    interactor.clickByClass('action-bar__item', 'Open');
     
    it('should show Purchase to pay process', function() {
        reader.shouldReadTextByClass('ce-component-title','Purchase to pay process');
    });
});
