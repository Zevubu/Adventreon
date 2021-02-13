https://github.com/npm/npm/issues/7494

npx browserslist --update-db

Heroku server error logs:
yarn run v1.22.10
$ if-env NODE_ENV=production && yarn run start:prod || yarn run start:dev
$ node server.js
internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module './logoutAPI/index'
Require stack:
- /app/routes/api/index.js
- /app/routes/index.js
- /app/server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/app/routes/api/index.js:3:19)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/app/routes/api/index.js',
    '/app/routes/index.js',
    '/app/server.js'
  ]
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
$ concurrently "nodemon --ignore 'client/*'" "yarn run client"
[0] [nodemon] 2.0.2
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching dir(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server.js`
$ cd client && yarn run start
[0] internal/modules/cjs/loader.js:883
[0]   throw err;
[0]   ^
[0] 
[0] Error: Cannot find module './logoutAPI/index'
[0] Require stack:
[0] - /app/routes/api/index.js
[0] - /app/routes/index.js
[0] - /app/server.js
[0]     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
[0]     at Function.Module._load (internal/modules/cjs/loader.js:725:27)
[0]     at Module.require (internal/modules/cjs/loader.js:952:19)
[0]     at require (internal/modules/cjs/helpers.js:88:18)
[0]     at Object.<anonymous> (/app/routes/api/index.js:3:19)
[0]     at Module._compile (internal/modules/cjs/loader.js:1063:30)
[0]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
[0]     at Module.load (internal/modules/cjs/loader.js:928:32)
[0]     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
[0]     at Module.require (internal/modules/cjs/loader.js:952:19) {
[0]   code: 'MODULE_NOT_FOUND',
[0]   requireStack: [
[0]     '/app/routes/api/index.js',
[0]     '/app/routes/index.js',
[0]     '/app/server.js'
[0]   ]
[0] }
[0] [nodemon] app crashed - waiting for file changes before starting...
$ react-scripts start
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://[::1]:3223
[1] [HPM] Proxy created: /  -> https://adventreon-img-bucket.s3.us-west-1.amazonaws.com
[1] [HPM] Proxy rewrite rule created: "^/imgproxy" ~> ""
[1] ℹ ｢wds｣: Project is running at http://172.16.53.186/
[1] ℹ ｢wds｣: webpack output is served from 
[1] ℹ ｢wds｣: Content not from webpack is served from /app/client/public
[1] ℹ ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1] 
[1] Browserslist: caniuse-lite is outdated. Please run the following command: `npx browserslist --update-db`
[1] Compiled with warnings.