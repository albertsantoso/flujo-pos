const jwt = require('jsonwebtoken');

module.exports = {
    createJWT: (payload, expiry) => {
        try {
            return jwt.sign(payload, 'abc123', {
                expiresIn: expiry
            })
        } catch (error) {
            return(error)
        }
    },

    verify: (req, res, next) => {
        try {
            const token = req.params.id;
            const decodeData = jwt.verify(token, 'abc123')
            req.dataToken = decodeData
            console.log(req.dataToken);
            next()
        } catch (error) {
            return(error)
        }
    }
}