const locatorHelpers = require('../helpers/location-helpers.js');

module.exports = {
    shouldReadHeader(text) {
      return expect(locatorHelpers.getHeader().getText()).toEqual(text);
    }
}