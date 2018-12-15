const locator = require('../helpers/location-helpers.js');

module.exports = {
    shouldReadHeader(text) {
      return expect(locator.getHeader().getText()).toEqual(text);
    },
    shouldReadTextByClass(className, text) {
      return expect(locator.getElementByClass(className).getText()).toEqual(text);
    }
}