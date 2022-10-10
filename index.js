import chalk from 'chalk';
import * as fs from 'fs';

// sites 
import { eachForCitilinkSite } from './eachSites/eachCitilink.js';
import listItemsHandlerCitilink from './handlers/listItemsHandlerCitilink.js';



// ---- 
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
            const mobiles = eachForCitilinkSite(pageContent)
            await listItemsHandlerCitilink(mobiles)
            //console.log(mobiles)
            
            var saveJson = JSON.stringify(mobiles, null, " ");
            fs.writeFile('./data/data.json', saveJson, (error) => { if (error) throw error;});

            
        }
    }
    catch (err){
        console.log(chalk.red('An error has catched \n'));
        console.log(err);
    }
})()