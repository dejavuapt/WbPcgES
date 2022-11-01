import cheerio from 'cheerio';
import { slugify } from 'transliteration';
import chalk from 'chalk';

export function eachForDNS(pageContentDNS) {
    const $ = cheerio.load(pageContentDNS, false)
    const mobileItems = []

    // я создаю базу данных всех телефонов и объеденяю отзывы в одно. После обучаю на этих отзывах модель и тестовые это ещё отзывы но уже по телефонам

    $('.catalog-product').each((i, header) => {
        const title = $(header).find('.catalog-product__name')
        const name = title.find('span').text().trim()
        
        // console.log(title)
        // var parsTitle = JSON.parse(title)

        // const count_opinions = $(header).find('.ProductCardHorizontal__icons').children().last().find('.ProductCardHorizontal__count').text().trim()
        // const common_rating = $(header).find('.ProductCardHorizontal__icons').children().first().find('.ProductCardHorizontal__count').text().trim()
        // --- opinions
        const product_rating = $(header).find('.catalog-product__rating')
        const op_url = 'https://www.dns-shop.ru' + product_rating.attr('href')
        const op_size = product_rating.text().trim()
        const op_rating = product_rating.attr('data-rating')
        // var url_op = null
        // if (count_opinions != 0) {
        //     url_op = 'https://www.dns-shop.ru' + title.attr('href') + "opinion"
        // }

        mobileItems.push({
            categoryid: 246,
            title: reformString(name),
            copy_title: slugify(name),
            // brand: parsTitle['brandName'],
            // price: parsTitle['price'],
            rating: op_rating,
            opinions_size: op_size,
            opinions_url: op_url,
            // reviews: null
        })
    })

    return mobileItems
}

function reformString(line){
    var re = /[0-9]"|[иы]й*/
    return line.split(" ").filter((item) => { return !re.test(item)}).join(' ');
}