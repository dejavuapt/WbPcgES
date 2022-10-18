import chalk from "chalk";
import puppeteer from "puppeteer";

export const LAUNCH_PUPPETEER_OPTS = {
    args: [
        '--disable-setuid-sandbox',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
    ],
    product: 'chrome',
    headless: false,
};

export const PAGE_PUPPETEER_OPTS = {
    networkIdle2Timeout: 5000,
    waitUntil: 'networkidle2',
    timeout: 3000000
};

export async function getPageContent(url, button){
    try{
        const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
        const page = await browser.newPage()
        await page.goto(url, PAGE_PUPPETEER_OPTS)
        if(button){
            try {
                console.log("open more...")
                await page.click('#opinion-list > div.Comments__more.show_more > button')
                await page.click('#opinion-list > div.Comments__more.show_more > button')
                
                //await page.waitForNetworkIdle({waitUntil: 'networkidle0'})
            }  
            catch(err){
                console.log(chalk.red(err));
            }
            finally{
                console.log("wait 6s")
                await page.waitForTimeout(6000)
            }
        }
        const content = await page.content()
        browser.close()
        
        return content
    }
    catch (err){
        console.log(chalk.red("err from getPageContent"));
        console.log(err);
    }
};