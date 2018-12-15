const EC = protractor.ExpectedConditions;
module.exports = {
  getHeader() {
    return element(by.css('h1'));
  }
}