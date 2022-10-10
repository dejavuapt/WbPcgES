# **WbPcgES**
![Version](https://img.shields.io/badge/version-0.37-3CB371)

📦 [Project within the university] Parsing reviews from electronic equipment sites.


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

```
git clone https://github.com/dejavuapt/WbPcgES.git
npm i
npm start
```

После запуска, вы получите **data.json** первой страницы в папке **data** ( включен в проект )

Примерный вид данных:

```
[
 {
  "categoryid": 214,
  "title": "Смартфон REALME C30 2/32Gb,  зеленый",
  "copy_title": "smartfon-realme-c30-2-32gb-zelenyy",
  "brand": "REALME",
  "price": 5990,
  "rating": "4.7",
  "opinions_size": "3",
  "opinions_url": "https://www.citilink.ru/product/smartfon-realme-c30-rmx3581-32gb-2gb-zelenyi-3g-4g-6-5-720x1600-and10-1783093/otzyvy/"
 },
 {
  "categoryid": 214,
  .
  .
  .
```