//instruction: 

// When you sign up for an account somewhere, some websites do not actually store your password in their databases.Instead, they will transform your password into something else using a cryptographic hashing algorithm.

// After the password is transformed, it is then called a password hash.Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

// Create the function that converts a given string into an md5 hash.The return value should be encoded in hexadecimal.

// You will need to use the NodeJS Crypto Module or libcrypto for the C and NASM versions.








const crypto = require('crypto');
function passHash(str) {

    let hash = crypto.createHash('md5').update(str).digest('hex');
    return hash;

}

