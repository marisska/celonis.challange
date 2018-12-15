# Celonis Challenge

## Health check
The health check starts the system and checks availability of the most important elements

### Build

Use npm to install Protractor globally with:

	npm install -g protractor

Use webdriver-manager to download the necessary binaries with:

	webdriver-manager update

In order to start webdriver manager, you would need JDK http://www.oracle.com/technetwork/java/javase/downloads/index.html

### Run tests

Start up a server with:

	webdriver-manager start

You can see information about the status of the server at http://localhost:4444/wd/hub.

Run tests with:

	protractor conf.js
