import jwt from "jsonwebtoken";
import { config } from "dotenv"
config()

class JwtHelpers {
    signAuthToken({ userId, secretKey, ei, ...rest }) {
        return new Promise((resolve, reject) => {
            const options = {
                expiresIn: ei,
                ...rest
                // issuer: process.env.JWT_AUTH_ISSUER,
                // audience: process.env.JWT_AUDIENCE,
            }
            jwt.sign({ userId }, secretKey, options, (err, token) => {
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