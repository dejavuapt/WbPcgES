const { default: chalk } = require('chalk');
const puppeteer = require('puppeteer');

async function startBrowser(options) {
    let browser;
    try{
        console.log(chalk.green('opening browser.......'));
        browser = await puppeteer.launch(options);
    }
    catch(err){
        console.log(err);
    }
    return browser
};

module.exports = {
    startBrowser,
};