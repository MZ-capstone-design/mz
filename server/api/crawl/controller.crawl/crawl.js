const response = require('../../../response')

const getCurrentFiveNews = require('../service.crawl/getCurrentFiveNews');

const getNews = async (req, res) => {
    try {
        const news = await getCurrentFiveNews();
        
        console.log(news);

        return response(res,200, news);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getNews
}