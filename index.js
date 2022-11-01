import chalk from 'chalk';


// sites 
import { eachForCitilinkSite } from './eachSites/eachCitilink.js';
import listItemsHandlerCitilink from './handlers/listItemsHandlerCitilink.js';



// ---- 
import { arrayFromLenghts } from './helpers/common.js';
import { getPageContent } from './helpers/puppeteer.js';

const sites_url = [{name: 'citilink', url: 'https://www.citilink.ru/catalog/smartfony/?p='}, {name: 'dns', url: 'https://www.dns-shop.ru/catalog/17a8a01d16404e77/smartfony/?p='}]

let SITE = sites_url[0].url
sites_url.forEach((site) => {
    if(site.name == process.argv[2].toLowerCase()){
        SITE = site.url;
    }
})
const pages = process.argv[3] || 1

console.log(pages);

(async function main(){
    try{
        for(const page of arrayFromLenghts(pages)){
            var url = SITE.concat(page.toString())
            console.log(url);
            // const pageContent = await getPageContent(url)
            // const mobiles = eachForCitilinkSite(pageContent)
            // await listItemsHandlerCitilink(mobiles)
        }
    }
    catch (err){
        console.log(chalk.red('An error has catched \n'));
        console.log(err);
    }
})()