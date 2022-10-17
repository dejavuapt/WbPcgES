import cheerio from 'cheerio';
import chalk from 'chalk';


import { saveData } from '../handlers/saver.js'
import { getPageContent } from '../helpers/puppeteer.js';

export default async function listItemsHandlerCitilink(data){
    try{
        for(const initialData of data){
            if(initialData.opinions_url == null){ continue; }
            console.log(chalk.green('Getting data from: ') + chalk.green.bold(initialData.opinions_url));
            const detailContent = await getPageContent(initialData.opinions_url, true)
            const $ = cheerio.load(detailContent)
            
            const opinionItems = []
            
            $('.Opinion').each((i, opinion) =>{
                const name_reviewer = $(opinion).children().first().find('.js--UserAvatar__name').text().trim()
                const rate_reviewer = $(opinion).children().first().find('.UserAvatar__number').text().trim()
                const commenting =  []
                $(opinion).find('.OpinionText').children('p').each((i,v) => {
                    commenting.push($(v).text().trim().split('\n').join(' '))
                })

                opinionItems.push({name_reviewer, rate_reviewer, commenting})
            })

            initialData.reviews = opinionItems
            
            await saveData(initialData)

        }
    }
    catch (err){
        throw err
    }
}

