const express = require('express')
const router = express.Router()
const crawl = require('./controller.crawl/crawl')
const path = require('path');
const validate = require('../../middleware/validate')

router.get('/getNews', crawl.getNews);

module.exports = router;
