const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

require('dotenv').config();

const s3 = require('../config/awsS3-config')

const s3Storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname })
  },
  key: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, 'Montages/'+ path.basename(file.originalname, ext) + new Date().valueOf() + ext); 
  },
});

const uploadImage = multer({
        storage: s3Storage,
        limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = uploadImage;