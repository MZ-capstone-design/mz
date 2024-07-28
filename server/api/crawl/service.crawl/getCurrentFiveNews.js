const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

module.exports = async () => {
    try {
        const clientID = process.env.NAVER_CLIENT_ID;
        const clientSecret = process.env.NAVER_CLIENT_SECRET;

        const query = '몽타주';

        const apiUrl = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(query)}&display=5&sort=date`;

        const response = await axios.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': clientID,
                'X-Naver-Client-Secret': clientSecret,
            },
        });

        const articles = response.data.items;

        // <b> 태그를 제거하는 부분
        articles.forEach(article => {
            const $ = cheerio.load(article.description);
            article.description = $.text();
        });

        console.log(articles);
        return articles;

    } catch (err) {
        console.error(err);
    }
};
