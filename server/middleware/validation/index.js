import { check, validationResult } from "express-validator"

export const userValidation = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Username is empty'),
    check('password')
        .isLength({ min: 4, max: 17 })
        .withMessage('Password must be more than 4 and less than 17'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            // return createError(422, errors.errors)
            return res.status(422).json({ errors: errors.array() })
        }
        next()
    }
]