import cheerio from 'cheerio';
import chalk from 'chalk';

import { getPageContent } from '../helpers/puppeteer.js';

export default async function listItemsHandlerCitilink(data){
    try{
        for(const initialData of data){
            if(initialData.opinions_url == null){ continue; }
            console.log(chalk.green('Getting data from: ') + chalk.green.bold(initialData.opinions_url));
            const detailContent = await getPageContent(initialData.opinions_url)
            const $ = cheerio.load(detailContent)
            //document.querySelector("#opinion-list > div:nth-child(1) > div.OpinionText")
            //document.querySelector("#opinion-list > div:nth-child(1) > div.OpinionText > p:nth-child(2)")
            // const opinionItems = []
            $('.Opinion').each((i, opinion) =>{
                const name_reviewer = $(opinion).children().first().find('.js--UserAvatar__name').text().trim()
                const rate_reviewer = $(opinion).children().first().find('.UserAvatar__number').text().trim()
                const commenting =  []
                $(opinion).find('.OpinionText').children('p').each((i,v) => {
                    commenting.push($(v).text().trim().split('\n').join(' '))
                })

                initialData.reviews = {name_reviewer, rate_reviewer, commenting}
            })
        }
    }
    catch (err){
        throw err
    }
}

async function saveData(data){

}