const dotenv = require("dotenv");
const KEYS = require("./keys")

dotenv.config();

let CONFIG = {} 

CONFIG.app = process.env.APP || 'dev';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;