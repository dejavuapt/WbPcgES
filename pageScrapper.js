const scrapper = {
    url: "https://www.citilink.ru/product/smartfon-xiaomi-poco-m3-pro-128gb-6gb-sinii-3g-4g-5-2-and11-802-11-a-b-1536923/otzyvy/#Close",
    async scraper(browser){
        let page = await browser.newPage();

        await page.goto(this.url);
        await page.waitForSelector("#opinion-list");

        console.log('page loaded');

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
                pageReviews.push(titles.innerText);
            };
            return pageReviews;
        })
        console.log({reviews});
    }
}

module.exports = scrapper;