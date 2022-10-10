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

            // я создаю базу данных всех телефонов и объеденяю отзывы в одно. После обучаю на этих отзывах модель и тестовые это ещё отзывы но уже по телефонам

            $('.ProductCardHorizontal').each((i, header) => {
                const title = $(header).attr('data-params')
                var parsTitle = JSON.parse(title)

                const count_opinions = $(header).find('.ProductCardHorizontal__icons').children().last().find('.ProductCardHorizontal__count').text().trim()
                const common_rating = $(header).find('.ProductCardHorizontal__icons').children().first().find('.ProductCardHorizontal__count').text().trim()

                var url_op = null
                if(count_opinions != 0){
                    url_op = $(header).find('.ProductCardHorizontal__rating-block').children().first().attr('href')
                }

                mobileItems.push({
                    categoryid: parsTitle['categoryId'],
                    title: parsTitle['shortName'],
                    copy_title: slugify(parsTitle['shortName']),
                    brand: parsTitle['brandName'],
                    price: parsTitle['price'],
                    rating: common_rating,
                    opinions_size: count_opinions,
                    opinions_url: url_op
                })
            })
            console.log(mobileItems)
        }
    }
    catch (err){
        console.log(chalk.red('An error has catched \n'));
        console.log(err);
    }
})()