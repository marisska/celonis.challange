module.exports = {
    navigateTo(url) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }
  }