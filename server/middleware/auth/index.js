import { config } from "dotenv";
import jwt from "jsonwebtoken";
config()

export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS")
        return next()
    try {

    } catch (err) {
        res.status(403).json({ message: "Unauthorized user" })
        console.log(err)
    }
}
