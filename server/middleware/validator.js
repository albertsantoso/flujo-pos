const {query, body, validationResult } = require('express-validator');

const validateUserPassword = [
    body('password').isLength({ min: 6 }).withMessage("Password does not meet the minimum required character")
]

const validateUserEmail = [
    body('email').isEmail().withMessage("Please enter a valid email address")
]

const handleValidationErrors = (req, res, next) => {
    console.log(req.body);
    const error = validationResult(req)
    // console.log(error);
    if(!error.isEmpty()) {
        console.log(error.errors[0].msg);
        return res.status(401).send(
            {message: error.errors[0].msg}
        )
    }
    next()
}

module.exports = {
    validateUserEmail,
    validateUserPassword,
    handleValidationErrors
}