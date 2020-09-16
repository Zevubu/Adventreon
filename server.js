const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const {passport} = require('./passport/index')
const fileUpload = require('express-fileupload');
// const bodyParser = require("body-parser");
// const {jwtOptions, strategy, passport} = require("./JWT/index");

const PORT = process.env.PORT || 3001;
const app = express();

// const VcId = process.env.VIMEO_CLIENT_ID;
// const VsKey = process.env.VIMEO_SECRET_KEY;
// const VAT = process.env.VIMEO_ACCESS_TOKEN;

// let Vimeo = require('vimeo').Vimeo;
// console.log(`Vimeo ${JSON.stringify(Vimeo) }`)
// let client = new Vimeo(VcId, VsKey, VAT);
// console.log(client)

// passport.use(strategy)
app.use(passport.initialize())

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// // parse application/json
// app.use(bodyParser.json())
//file transfer module 
app.use(fileUpload ({createParentPath: true},{debug: true}) )

// parse requests of content-type: application/json
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// enable cross origin sharring
app.use(cors());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(routes);

// var filePath = 'D:/video/WebSiteExamples/geniP.mp4'

// console.log('Uploading: ' + filePath)

// var params = {
//   'name': 'Vimeo API SDK test upload',
//   'description': "This video was uploaded through the Vimeo API's NodeJS SDK."
// }

// client.upload(
//   filePath,
//   params,
//   function (uri) {
//     // Get the metadata response from the upload and log out the Vimeo.com url
//     client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
//       if (error) {
//         console.log('There was an error making the request.')
//         console.log('Server reported: ' + error)
//         return
//       }

//       console.log('"' + filePath + '" has been uploaded to ' + body.link)

//       // Make an API call to edit the title and description of the video.
//       client.request({
//         method: 'PATCH',
//         path: uri,
//         params: {
//           'name': 'Vimeo API SDK test edit',
//           'description': "This video was edited through the Vimeo API's NodeJS SDK."
//         }
//       }, function (error, body, statusCode, headers) {
//         if (error) {
//           console.log('There was an error making the request.')
//           console.log('Server reported: ' + error)
//           return
//         }

//         console.log('The title and description for ' + uri + ' has been edited.')

//         // Make an API call to see if the video is finished transcoding.
//         client.request(
//           uri + '?fields=transcode.status',
//           function (error, body, statusCode, headers) {
//             if (error) {
//               console.log('There was an error making the request.')
//               console.log('Server reported: ' + error)
//               return
//             }

//             console.log('The transcode status for ' + uri + ' is: ' + body.transcode.status)
//           }
//         )
//       })
//     })
//   },
//   function (bytesUploaded, bytesTotal) {
//     var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
//     console.log(bytesUploaded, bytesTotal, percentage + '%')
//   },
//   function (error) {
//     console.log('Failed because: ' + error)
//   }
// )


// app.path('/video',
//     client.request({
//         method: 'GET',
//         path: '/me'
//     }, function (error, body, status_code, headers) {
//         if (error) {
//             console.log(error);
//         }
//         console.log(body);
//         return(JSON.stringify(body));
//     })
// )


app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})