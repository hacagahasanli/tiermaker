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

        const decodedValue = jwt.verify(token, process.env.SECRET_KEY)
        const { iss, aud } = decodedValue

        if (iss === process.env.JWT_AUTH_ISSUER &&
            aud === process.env.JWT_AUDIENCE) {
            req.userId = decodedValue;
            return next()
        }
        return res.status(403).json({ message: "Unauthorized user" })

    } catch (err) {
        res.status(403).json({ message: "Unauthorized user" })
        console.log(err)
    }
}
