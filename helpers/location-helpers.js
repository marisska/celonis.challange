const EC = protractor.ExpectedConditions;

module.exports = {
  getHeader() {
    return element(by.css('h1'));
  },
  getElementByName(name) {
    return element(by.name(name));
  },
  getElementByClass(className) {
    return element(by.css(`.account-holder`));
  },
  getButton(buttonText) {
    return element(by.buttonText(buttonText));
  }
}