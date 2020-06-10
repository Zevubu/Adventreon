const crypto = require('crypto');
const CONFIG = require('../jwtConfig');

const algorithm = 'aes-192-cbc';
const password = CONFIG.crypto_pass;
// Key length is dependent on the algorithm. In this case for aes192, it is
// 24 bytes (192 bits).
// Use async `crypto.scrypt()` instead.


const key = crypto.scryptSync(password, 'salt', 24);
// Use `crypto.randomBytes()` to generate a random iv instead of the static iv
// shown here.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const stringEncryption = async (req) => {
    
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = '';
    cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('hex');
    }
    });

    cipher.on('end', () => {
        // return `Encrypted data: ${encrypted}`;
        console.log(`Data Encrypted`)
        
    });

    await cipher.write(req);
    await cipher.end();
    return encrypted
}

const stringDecryption = async (req) =>{
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = '';
    decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
    });
    decipher.on('end', () => {
    console.log(`Data Decrypted`);
    });
    await decipher.write(req, 'hex');
    await decipher.end();
    return decrypted;
}

module.exports = {
    stringEncryption,
    stringDecryption
}
