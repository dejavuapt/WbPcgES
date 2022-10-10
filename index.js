// const browserObject = require('./browser')
// const scrapperController = require('./pageController');

// let browserInstance = browserObject.startBrowser();

// scrapperController(browserInstance);


import chalk from 'chalk';
import cheerio from 'cheerio';
import { slugify } from 'transliteration';

import { arrayFromLenghts } from './helpers/common.js';
import { getPageContent } from './helpers/puppeteer.js';

const SITE = 'https://www.citilink.ru/catalog/smartfony/?p='
const pages = 1;

(async function main(){
    try{
        for(const page of arrayFromLenghts(pages)){
            var url = SITE.concat(page.toString())
            console.log(url);
            const pageContent = await getPageContent(url)
            const $ = cheerio.load(pageContent)
            const mobileItems = []

            $('.ProductCardHorizontal').each((i, header) => {
                const title = $(header).children('.ProductCardHorizontal__header-block').text()

                mobileItems.push({
                    title,

                })
            })
            console.log(mobileItems)
        }
    }
    catch (err){
        console.log(red('An error has catched \n'));
        console.log(err);
    }
})()