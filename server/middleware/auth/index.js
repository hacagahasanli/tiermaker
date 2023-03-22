import { config } from "dotenv";
import jwt from "jsonwebtoken";
config()

export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS")
        return req.status(405).json({ message: "Method Not Allowed" })

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return res.status(401).json({ message: "Empty token value!" })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decodedValue) => {
            const { iss, aud } = decodedValue;
            let message = "Unauthorized user"

            if (iss !== process.env.JWT_AUTH_ISSUER ||
                aud !== process.env.JWT_AUDIENCE) {
                return res.status(403).json({ message })
            }

            if (err) {
                message = err.name === "JsonWebTokenError" ? message : err.message
                return res.status(403).json({ message })
            }

            req.userId = decodedValue;
            return next()
        })

    } catch (err) {
        res.status(403).json({ message: "Unauthorized user" })
        console.log(err)
    }
}
