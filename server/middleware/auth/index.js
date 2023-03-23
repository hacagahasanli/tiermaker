import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { response } from "../../helper/response.js";
config()

export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS")
        return response(res, 405, 'serv')

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return response(res, 401, 'serv')

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decodedValue) => {
            const { iss, aud } = decodedValue;

            if (iss !== process.env.JWT_AUTH_ISSUER ||
                aud !== process.env.JWT_AUDIENCE) {
                return response(res, 403)
            }

            if (err) {
                const message = err.name !== "JsonWebTokenError" ? message : err.message
                return response(res, 403)
            }

            req.userId = decodedValue;
            return next()
        })

    } catch (err) {
        response(res, 403)
        console.log(err)
    }
}
