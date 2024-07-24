require('dotenv').config();

const { S3Client } = require("@aws-sdk/client-s3");
const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.S3_ACCESSKEYID,
      secretAccessKey: process.env.S3_SECRETACCESSKEY,
    },
    region: process.env.S3_REGION,
})

module.exports = s3