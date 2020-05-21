const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const VcId = process.env.VIMEO_CLIENT_ID || "";
const VsKey = process.env.VIMEO_SECRET_KEY || "";
const VAT = process.env.VIMEO_ACCESS_TOKEN || "";

const Vimeo = require('vimeo').Vimeo;
const client = new Vimeo(VcId, VsKey, VAT);

const Params = {

}


module.exports ={
    tusStarter: function(req, res){
        const data = req.body;
        console.log(`Params!!!!!!!!!! ${JSON.stringify(data.upload.size)}`)
            client.request({
                method: 'POST',
                path:`/users/${VcId}/videos`,
                path:'/me/videos',
                params:{
                    'upload': {
                    'approach': 'tus',
                        'size': `${data.upload.size}`
                    }
                }
            }, function (error, body, status_code, headers) {
                if (error) {
                    console.log(`Client error:${error}`);
                    res.send(error);
                }
                // console.log(`Body!!!! ${body}`);
                // console.log(`Headers!!!! ${JSON.stringify(headers)}`);
                // console.log(`Status_code!!!! ${status_code}`);
                const response = {'status':'success', 'uploadLink':JSON.stringify(body.upload.upload_link), 'videoUri':JSON.stringify(body["uri"])}
                // console.log(`Response!!!: ${JSON.stringify(response)}`)
                res.send(response);
            })
    },
    tusPatcher: function(req, res){
        const data = req.body;
        console.log(`patch params: ${JSON.stringify(data.data.uploadLink)}`)
        client.request({
            method: 'patch',
            path: `/users/${VcId}/${data.data.uri}`,
            path:data.uploadLink,
            videoData:data.videoData,
            params:{
                headers: {
                    'Tus-Resumable': '1.0.0',
                    'Upload-Offset': data.data.uploadOffset || '0',
                    'Content-Type': 'application/offset+octet-stream'
                },
                onUploadProgress: function(progressEvent) {
                    console.log(`Patch progress Event 4 (vimeoUpload): ${JSON.stringify(ProgressEvent)}`)
                    const total = progressEvent.total || data.data.size;
                    console.log(`Patch total 4 (vimeoUpload): ${total}`)
                    const loaded = progressEvent.loaded || 0;
                    const progress = loaded / total * 100;
                    dispatch({
                        type: POST_VIMEO_PROGRESS,
                        payload: {
                        uploading: true,
                        progress: progress >= 100 ? 90 : progress
                        }
                    });
                }

            }
        }, function (error, body, status_code, headers) {
            if (error) {
                console.log(`Client error:${error}`);
                res.send(error);
            }
            console.log(`Body!!!! ${JSON.stringify(body)}`);
            console.log(`Headers!!!! ${JSON.stringify(headers)}`);
            console.log(`Status_code!!!! ${status_code}`);
            const response = {'status':'success', 'uploadLink':JSON.stringify(body.upload.upload_link), 'videoUri':JSON.stringify(body["uri"])}
            console.log(`Response!!!: ${JSON.stringify(response)}`)
            res.send(response);
        })
    },
    vimeoUpload: function(req,res){
       const {videoData} = req.params;
        console.log(`req.params:${videoData}`);
        var filePath = videoData;
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
