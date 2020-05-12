const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const VcId = process.env.VIMEO_CLIENT_ID || "";
const VsKey = process.env.VIMEO_SECRET_KEY || "";
const VAT = process.env.VIMEO_ACCESS_TOKEN || "";

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(VcId, VsKey, VAT);

module.exports ={
    vimeoUpload: function(req,res){
       const {videoData} = req.params;
        console.log(`req.params:${videoData}`);
        var filePath = ''
        console.log('Uploading: ' + filePath)
        var params = {
            'name': 'example of a web page I made',
            'description': "This video was uploaded through the Vimeo API's NodeJS SDK."
        }
        axios.put(
            client.upload(
                filePath,
                params,
                function (uri) {
                    // Get the metadata response from the upload and log out the Vimeo.com url
                    client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
                    if (error) {
                        console.log('There was an error making the request.')
                        console.log('Server reported: ' + error)
                        return
                    }

                    console.log('"' + filePath + '" has been uploaded to ' + body.link)
                    res.send(`body upload tes 1: ${JSON.stringify(body)}`);
                    res.send(body);

                    // Make an API call to edit the title and description of the video.
                    client.request({
                        method: 'PATCH',
                        path: uri,
                        params: {
                        'name': 'Vimeo API SDK test edit',
                        'description': "This video was edited through the Vimeo API's NodeJS SDK."
                        }
                    }, function (error, body, statusCode, headers) {
                        if (error) {
                        console.log('There was an error making the request.')
                        console.log('Server reported: ' + error)
                        return
                        }

                        console.log('The title and description for ' + uri + ' has been edited.')

                        // Make an API call to see if the video is finished transcoding.
                        client.request(
                        uri + '?fields=transcode.status',
                        function (error, body, statusCode, headers) {
                            if (error) {
                            console.log('There was an error making the request.')
                            console.log('Server reported: ' + error)
                            return
                            }

                            console.log('The transcode status for ' + uri + ' is: ' + body.transcode.status)
                            res.send(`body upload test 2: ${body}`);
                        }
                        )
                    })
                    })
                },
                function (bytesUploaded, bytesTotal) {
                    var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
                    console.log(bytesUploaded, bytesTotal, percentage + '%')
                },
                function (error) {
                    console.log('Failed because: ' + error)
                }
            )

        )
    }
}


// client.upload(
//   file_name,
//   {
//     'name': 'Untitled',
//     'description': 'The description goes here.'
//   },
//   function (uri) {
//     console.log('Your video URI is: ' + uri);
//   },
//   function (bytes_uploaded, bytes_total) {
//     var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
//     console.log(bytes_uploaded, bytes_total, percentage + '%')
//   },
//   function (error) {
//     console.log('Failed because: ' + error)
//   }
// )
// client.request(uri + '?fields=transcode.status', function (error, body, status_code, headers) {
//     if (body.transcode.status === 'complete') {
//       console.log('Your video finished transcoding.')
//     } else if (body.transcode.status === 'in_progress') {
//       console.log('Your video is still transcoding.')
//     } else {
//       console.log('Your video encountered an error during transcoding.')
//     }
//   })
