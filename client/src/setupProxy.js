const { createProxyMiddleware } = require('http-proxy-middleware');


// /api
// /auth
// /profexfiller
// /upload
// /patch
// /img
// /validate

// all new routes must be stated.

const API = 'http://[::1]:3223';


module.exports = app => {
  app.use(
    "^/api",
    createProxyMiddleware({
      target:API
    })
  );
  app.use(
    "^/auth",
    createProxyMiddleware({
      target:API
    })
  );
  app.use(
    "^/upload",
    createProxyMiddleware({
      target:API
    })
  );
  app.use(
    "^/patch",
    createProxyMiddleware({
      target:API
    })
  );
  app.use(
    "/img",
    createProxyMiddleware({
      target:API
    })
  );
  app.use(
    "^/validate",
    createProxyMiddleware({
      target:API
    })
  );
   
  app.use(
    '/imgproxy/**',
    createProxyMiddleware({
        pathRewrite: {'^/imgproxy' : ''},
        target: 'https://adventreon-img-bucket.s3.us-west-1.amazonaws.com',
      })
    
  );
};

// {
//   "message":"Request failed with status code 403",
//   "name":"Error",
//   "stack":"Error: Request failed with status code 403
//   at createError (http://localhost:3002/static/js/0.chunk.js:87673:15)\n
//   at settle (http://localhost:3002/static/js/0.chunk.js:87894:12)\n
//   at XMLHttpRequest.handleLoad (http://localhost:3002/static/js/0.chunk.js:87148:7)",
//   "config":{
//     "url":"/imgProxy/boot?AWSAccessKeyId=AKIAIDBJO42GGUWDRJ54Q&Content-Type=jpg&Expires=1598917715&Signature=hUnysa6gCnHwwM5p5Af9j631I%2FI%3D&x-amz-acl=public-read-write",
//     "method":"put",
//     "data":{},
//     "headers":{
//         "Accept":"application/json,
//         text/plain,
//         */*",
//         "Content-Type":"jpg",
//         "ACL":"public-read-write",
//         "Access-Control-Allow-Origin":"*"
//       },
//       "transformRequest":[null],
//       "transformResponse":[null],
//       "timeout":0,
//       "xsrfCookieName":"XSRF-TOKEN",
//   "xsrfHeaderName":"X-XSRF-TOKEN",
//   "maxContentLength":-1
// }