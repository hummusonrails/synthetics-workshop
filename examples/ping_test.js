// Test that the website is available

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function pingTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:8000').then(() => {
    console.log('The site is alive!')
  }).catch((e) => {
      console.log(`There was an error: ${e.name}`)
  });

  await driver.quit();
})();