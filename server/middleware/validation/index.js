import { check } from "express-validator"

const fieldLengthRange = { min: 4, max: 17 }
export const userValidation = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Username is empty')
        .isLength(fieldLengthRange),
    check('password')
        .isLength(fieldLengthRange)
        .withMessage('Password must be more than 4 and less than 17'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(422).json({ errors: errors.array() })
        }
    }
]