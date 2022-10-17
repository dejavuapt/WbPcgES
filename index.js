import chalk from 'chalk';


// sites 
import { eachForCitilinkSite } from './eachSites/eachCitilink.js';
import listItemsHandlerCitilink from './handlers/listItemsHandlerCitilink.js';



// ---- 
import { arrayFromLenghts } from './helpers/common.js';
import { getPageContent } from './helpers/puppeteer.js';

const SITE = 'https://www.citilink.ru/catalog/smartfony/?p='
const pages = process.argv[2] || 1

console.log(pages);

(async function main(){
    try{
        for(const page of arrayFromLenghts(pages)){
            var url = SITE.concat(page.toString())
            console.log(url);
            const pageContent = await getPageContent(url)
            const mobiles = eachForCitilinkSite(pageContent)
            await listItemsHandlerCitilink(mobiles)
        }
    }
    catch (err){
        console.log(chalk.red('An error has catched \n'));
        console.log(err);
    }
})()