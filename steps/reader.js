const locator = require('../helpers/location-helpers.js');

module.exports = {
    shouldReadHeader(text) {
      return expect(locator.getHeader().getText()).toEqual(text);
    },
    shouldReadTextByClass(className, text) {
      return expect(locator.getElementByClassAndText(className, text)
        .isDisplayed()).toBeTruthy();(text);
    }
}