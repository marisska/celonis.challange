const EC = protractor.ExpectedConditions;
const timeout = 5000;

module.exports = {
  getHeader() {
    return element(by.css('h1'));
  },
  getElementByName(name) {
    return element(by.name(name));
  },
  getElementByClass(className) {
    var ele = element(by.css(`.${className}`));
    browser.wait(EC.visibilityOf(ele), timeout, 
            `No element with class ${className} is found.`);
    return ele;
  },
  getElementByClassAndText(className,text) {
    var ele = element(by.cssContainingText(`.${className}`, text));
    browser.wait(EC.visibilityOf(ele), timeout, 
            `No element with class ${className} and text ${text} is found.`);
    return ele;
  },
  getButton(buttonText) {
    return element(by.buttonText(buttonText));
  }
}