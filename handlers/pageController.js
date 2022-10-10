const pageScraper = require('./pageScrapCitilink');
async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)