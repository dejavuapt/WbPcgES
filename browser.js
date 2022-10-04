const puppeteer = require('puppeteer');

async function startBrowser() {
    let browser;
    try{
        console.log('opening browser.......');
        browser = await puppeteer.launch({
            headless: true,
            args: ['--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
        });
    }
    catch(err){
        console.log(err);
    }
    return browser
};

module.exports = {
    startBrowser,
};