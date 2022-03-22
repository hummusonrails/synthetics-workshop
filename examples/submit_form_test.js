// Test that the form submits successfully

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function formTest() {
  let url = 'https://express-xbdl.onrender.com'
  let driver = await new Builder().forBrowser('chrome').build();

  try {
      await driver.get(url);

      await driver.wait(until.elementLocated(By.css('input')), 30000);
      form = await driver.findElement(By.css('input'));
      form.sendKeys('ben@example.com', Key.RETURN);
      await driver.wait(until.elementLocated(By.css('h2')), 30000);
      let title = await driver.findElement(By.css('h2')).getText();
      if (title == 'Thank you!') {
        console.log('Success!')
      } else {
        console.log('The form is not working')
      };
  }
  finally {
      await driver.quit();
  }
})();