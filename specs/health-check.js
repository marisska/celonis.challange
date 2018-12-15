const navigator = require('../steps/navigator.js');
const reader = require('../steps/reader.js');

describe('When navigate to start', function() {
    navigator.navigateTo('/');

    it('it should see login page', function() {
      reader.shouldReadHeader('Log in');
    });
});