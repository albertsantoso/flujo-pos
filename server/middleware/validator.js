const {query, body, validationResult } = require('express-validator');

const validateUserPassword = [
    body('password').isLength({ min: 6 }).withMessage("Password does not meet the minimum required character")
]

const validateUserEmail = [
    body('email').isEmail().withMessage("Please enter a valid email address")
]

const handleValidationErrors = (req, res, next) => {
    const error = validationResult(req)
    
    if(!error.isEmpty()) {
        return res.status(400).send(
            { message: error.errors[0].msg}
        )
    }

    next()
}

module.exports = {
    validateUserEmail,
    validateUserPassword,
    handleValidationErrors
}