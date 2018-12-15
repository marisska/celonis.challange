
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://trialcloud.celonis.com/#/frontend/projects',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['specs/health-check.js']
  };