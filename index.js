// const browserObject = require('./browser')
// const scrapperController = require('./pageController');

// let browserInstance = browserObject.startBrowser();

// scrapperController(browserInstance);


import chalk from 'chalk';
import cheerio from 'cheerio';
import { PassThrough } from 'stream';
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
                const title = $(header).attr('data-params')
                const count_opinions = $(header).attr('data-opinion')
                var parsTitle = JSON.parse(title)

                mobileItems.push({
                    categoryid: parsTitle['categoryId'],
                    title: parsTitle['shortName'],
                    copy_title: slugify(parsTitle['shortName']),
                    brand: parsTitle['brandName'],
                    price: parsTitle['price'],
                    rating: 0,
                    opinions_size: count_opinions,
                    url_opinions: chd_title.children().first().attr('href')
                })
            })
            $('.ProductCardHorizontal__rating-block').each((i, header) => {
                const url_op = $(header).children().first().attr('href')
                
            })
            console.log(mobileItems)
        }
    }
    catch (err){
        console.log(chalk.red('An error has catched \n'));
        console.log(err);
    }
})()