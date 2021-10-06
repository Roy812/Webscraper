//This small application is a webscraper, it can find specific types of elements within a webpage.
//NPM packages: npm i axios | npm i cheerio \ npm i express
//axios is used for receiving the data from the webpage.
//cheerio is used to acquire the html code needed.
//express is used to listen to the server, this is necessary for axios to establish a connection.

const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')

const url = 'https://www.nytimes.com/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];

        $('.story-wrapper', html).each(function() {
            const result = $(this).find('h3').text();
            articles.push(result);
            //The Array can also hold objects, with multiple properties.
        })
        console.log(articles);
    }).catch(err => console.log('error'));

const app = express();
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))