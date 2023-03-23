import { config } from "dotenv"
import jwt from "jsonwebtoken"
import { response } from "../helper/response.js";
import UserSchema from "../models/User.js";

config()
class RefreshTokenController {
    async refreshTokenHandler() {
        try {
            const cookies = req.cookies

            if (!cookies?.jwt) return res.sendStatus(401)
            console.log(cookies.jwt);
            const refreshToken = cookies.jwt

            const matchedUser = await UserSchema.findOne({ refreshToken })
            if (!matchedUser) return res.sendStatus(403)

            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET_KEY,
                async (err, decoded) => {
                    if (err || matchedUser._id !== decoded.userId) return res.sendStatus(403)

                    const accessToken = await JwtHelper.signAuthToken({
                        userId: user._id,
                        secretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
                        ei: '130s'
                    })
                    return res.json({ accessToken })
                }
            )

        } catch (err) {
            response(res, 404)
            console.log(err);
        }
    }
}


export default new RefreshTokenController()