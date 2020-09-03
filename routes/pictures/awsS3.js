const express = require("express");
const router = express.Router();
const aws = require('aws-sdk');
const { update } = require("lodash");
require('dotenv').config();

aws.config.update({
    region: 'us-west-1',
    accessKeyId:process.env.AWSAccessKeyId,
    secretAccessKey:process.env.AWSSecretKey
});

const S3_BUCKET = process.env.AWSBucket;

router.route("/uploader")
    .post((req,res) => {
        const s3 = new aws.S3();
        const fileName = req.body.fileName;
        const fileType = req.body.fileType;
        console.log(`Aws Ping: ${fileName}.${fileType}`)
        // payload
        const s3Params = {
            'Bucket': S3_BUCKET,
            'Key': fileName,
            'Expires': 500,
            'ContentType': fileType,
            'ACL': 'public-read',
        };

        s3.getSignedUrl('putObject',s3Params, (err, data) => {
            if(err){
                console.log(`S3bucket ping error:${err}`);
                res.json({success: false, error: err})
            }
            // console.log(`Signed request data: ${data}`)
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            }
            // console.log(returnData)
            res.json({success:true, data:{returnData}});
        })


    })

module.exports = router;