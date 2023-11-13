const jwt = require('jsonwebtoken');
const config = require('config');

module.export = function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).send('401 Authorization required');
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch (ex) {
        return res.status(400).send('Your request resulted in an error.')
    }

}