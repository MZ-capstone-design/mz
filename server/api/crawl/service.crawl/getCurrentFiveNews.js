const axios = require('axios');

module.exports = async () => {
    try{
        const clientID = 'RdxMEqve55yyAU84_HvX';
        const clientSecret = 'VPZX6tQzeY';
      
        const query = '몽타주';
        
        const apiUrl = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(query)}&display=5&sort=date`;

        const response = await axios.get(apiUrl, {
            headers: {
                'X-Naver-Client-Id': clientID,
                'X-Naver-Client-Secret': clientSecret,
            },
        });
        const articles = response.data.items;
        return articles;

    }catch(err){
        console.error(err);
    }
};
