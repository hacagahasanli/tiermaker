import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { response } from "../../helper/response.js";
config()

export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS")
        return next()

    try {
        const authHeader = req.headers.authorization
        if (!authHeader) return response(res, 401, 'serv')

        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decodedValue) => {
            // const { iss, aud } = decodedValue;

            // if (iss !== process.env.JWT_AUTH_ISSUER ||
            //     aud !== process.env.JWT_AUDIENCE) {
            //     return response(res, 403)
            // }

            if (err) {
                const message = err.name !== "JsonWebTokenError" && err.message
                return response(res, 403, "user", { message })
            }
            req.userId = decodedValue;
            return next()
        })

    } catch (err) {
        response(res, 403)
        console.log(err)
    }
}
