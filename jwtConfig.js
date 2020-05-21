const dotenv = require("dotenv");

dotenv.config();

let CONFIG = {} 

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';
CONFIG.bcrypt_salt_rounds = 10;
module.exports = CONFIG;