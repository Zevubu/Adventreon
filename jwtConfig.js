const dotenv = require("dotenv");

dotenv.config();

let CONFIG = {} 
CONFIG.crypto_pass = process.env.CRYPTO_PASS
CONFIG.crypto_salt = process.env.CRYPTO_SALT
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION
CONFIG.bcrypt_salt_rounds = 10;
module.exports = CONFIG;