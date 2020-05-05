const crypto = require('crypto');

function sha1Encode(data) {
    // To be implemented!
    const sha1 = crypto.createHash('sha1');
    const pass = sha1.update(data);
    const passHash = pass.digest('hex');

    return passHash;
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const ERROR = 401;
    const authorization = request.headers.authorization;
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const authentication = decoded.split(':');
    const isValid = authentication[0] === 'node'
        && authentication[1] === sha1Encode('password');
    isValid ? next() : response.sendStatus(ERROR);
}