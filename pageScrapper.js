var fs = require('fs')

const scrapper = {
    url: "https://www.citilink.ru/product/smartfon-xiaomi-poco-m3-pro-128gb-6gb-sinii-3g-4g-5-2-and11-802-11-a-b-1536923/otzyvy/#Close",
    async scraper(browser){
        let page = await browser.newPage();

        await page.goto(this.url);
        await page.waitForSelector("#opinion-list");

        console.log('page loaded');

        let data_phone = []
        
        const phone = await page.evaluate(async () => {
            //let _phone = []
            const name = document.querySelector("div.product_data__gtm-js > div.ProductCardLayout__product-description > div > h1");
            const rating = document.querySelector("div.product_data__gtm-js > div.ProductCardLayout__product-description > div > div.ProductHeader__info > div.ProductHeader__icon-count.js--ProductHeader__icon-count > div:nth-child(1) > div > span.IconWithCount__count.js--IconWithCount__count");
            const price = document.querySelector("div.product_data__gtm-js > div.ProductCardLayout__product-description > div > div.ProductHeader__price-block > div.ProductHeader__price > div.ProductHeader__price-bonus > div > span > span.ProductHeader__price-default_current-price.js--ProductHeader__price-default_current-price");
            //_phone.push(name.innerText,rating.innerText,price.innerText);
            return {
                phonename: name.innerText,
                rate: rating.innerText,
                pric: price.innerText,
            };
        });

        const reviews = await page.evaluate(async () => {
            let pageReviews = []
            const rev = document.querySelectorAll("#opinion-list > div:nth-child(n)")
            for(let i = 0; i < rev.length; i++){
                const review = rev[i];
                let titles = [];
                const text = review.querySelectorAll("div.OpinionText > p:nth-child(n)");
                text.forEach((item, index) => {
                    switch(index){
                        case 0:
                            titles.push({
                                pluses: item.innerText,
                            })
                            break;
                        case 1:
                            titles.push({
                                minuses: item.innerText,
                            })
                            break;
                        case 2:
                            titles.push({
                                comment: item.innerText,
                            })
                            break;
                        default:
                    }
                });
                pageReviews.push(titles);
            };
            return pageReviews;
        })

        data_phone.push({
            title: phone,
            opinions: reviews,
        });

        var saveJson = JSON.stringify(data_phone, null, " ");
        fs.writeFile('data.json', saveJson, (error) => { if (error) throw error;});

        console.log({reviews});
    }
}

module.exports = scrapper;