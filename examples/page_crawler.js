// check each link works

const {Builder, By, until} = require('selenium-webdriver');

(async function crawlerTest() {
    let url = 'http://localhost:8000'
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        let links = await driver.findElements(By.tagName('a'));

        for (i = 0; i < links.length; i++) {
          await driver.get(url)
          await driver.wait(until.elementLocated(By.tagName('a')), 30000);
          links = await driver.findElements(By.tagName('a'));
          link = await links[i].getAttribute('href')
          await driver.get(link).then(() => {
            console.log(`This page is alive: ${link}`)
          }).catch((e) => {
              console.log(`There was an error: ${e.name}`)
          });
        }
    }
    finally {
        await driver.quit();
    }
})();