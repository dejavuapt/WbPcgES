# **Scraping cell phones from electronics stores**
![Version](https://img.shields.io/badge/version-0.4-3CB371)


## **Идея проекта:**

скоро напишу


## **Инструменты:**
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="js"/>

<a href="https://pptr.dev/">
<img src="https://img.shields.io/badge/Puppeteer-F0FFF0?style=for-the-badge&logo=Puppeteer&logoColor=3CB371" alt="puppeteer"/>
</a>
<a href="https://cheerio.js.org/index.html">
<img src="https://img.shields.io/badge/cheerio-F5F5DC?style=for-the-badge&logo=cheerio&logoColor=3CB371" alt="nodejs"/>
</a>

- Puppeteer - для парсинга html кода с сайтов
- Cheerio - для поиска и получения данных с html 

## **Как использовать?**

v0.35: Парсинг общей информации о смартфонах с сайта Citilink. Изменять кол-во страниц в самом коде.

v0.4: Сделан парсинг по сайту Citilink. 
  Bugs: Иногда не прогружается сайт полностью, из-за чего не все отзывы скрапятся. (Возможно ошибка лично у меня на компьютере, если скорость интернета
  впорядке то думаю будет без бага. Решено временно - добавление промежуточного ожидания равного 6 секунды)

```
git clone https://github.com/dejavuapt/WbPcgES.git
npm i
npm run scrap {site_name* || default = citilink} {pages || default = 1}
```

*site_name = ['citilink', 'dns']

После запуска, скрапятся телефоны с сайта, которого вы указали в виде **.json**, в папку **data** ( включен в проект )

Вид данных

```
{
 "categoryid": 214,
 "title": "Смартфон Apple iPhone 13 128Gb,  A2631,  альпийский зеленый",
 "copy_title": "smartfon-apple-iphone-13-128gb-a2631-alpiyskiy-zelenyy",
 "brand": "APPLE",
 "price": 66390,
 "rating": "5.0",
 "opinions_size": "3",
 "opinions_url": "https://www.citilink.ru/product/smartfon-apple-iphone-13-a2631-128gb-128-zelenyi-3g-4g-6-1-ios-15-802-1783868/otzyvy/#Close",
 "reviews": [
  {
   "name_reviewer": "N\\A",
   "rate_reviewer": "5",
   "commenting": [
    "Очень удобен в использовании,красивый и стильный.До покупки этого шикарного айфона- был айфон 6.Работает очень быстро.Очень довольна покупкой.Однозначно советую!",
    "Их нет",
    "Очень приятный и грамотный персонал. Сотрудник Максим проконсультировал по поводу телефона и бонусной карте магазина. Всё чётко и по делу. Остались очень довольны покупкой и обслуживанием!"
   ]
  },
  .
  .
  .
```