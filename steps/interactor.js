const locator = require('../helpers/location-helpers.js');

module.exports = {
  enterTextByName(name, text) {
    locator.getElementByName(name).sendKeys(text);
  },
  clickButton(buttonText) {
    locator.getButton(buttonText).click();
  }
}