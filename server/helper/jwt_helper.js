import jwt from "jsonwebtoken";
import { config } from "dotenv"
config()

class JwtHelpers {
    signAccessToken({ id }) {
        return new Promise((resolve, reject) => {
            const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY
            const options = {
                expiresIn: '24h',
                issuer: process.env.JWT_AUTH_ISSUER,
                audience: process.env.JWT_AUDIENCE,
            }
            jwt.sign({ id }, secretKey, options, (err, token) => {
                if (err) {
                    console.log(err);
                    reject(err)
                    return
                }
                resolve(token)
            })
        })

    }
    signRefreshToken() {

    }
}

export const JwtHelper = new JwtHelpers()