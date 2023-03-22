import { config } from "dotenv";
import jwt from "jsonwebtoken";
config()

export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS")
        return next()

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return res.status(401).json({ message: "Empty token value!" })

        const decodedValue = jwt.verify(token, process.env.SECRET_KEY)
        req.userId = decodedValue;
        next()
    } catch (err) {
        res.status(403).json({ message: "Unauthorized user" })
        console.log(err)
    }
}
