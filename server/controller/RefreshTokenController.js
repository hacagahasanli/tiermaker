import { config } from "dotenv"
import jwt from "jsonwebtoken"
import { JwtHelper } from "../helper/jwt_helper.js";
import { response } from "../helper/response.js";
import UserSchema from "../models/User.js";

config()
class RefreshTokenController {
    async refreshTokenHandler(req, res) {
        try {
            const cookies = req.cookies
            if (!cookies?.jwt) return response(res, 401, "serv")

            const refreshToken = cookies.jwt

            const matchedUser = await UserSchema.findOne({ refreshToken })
            if (!matchedUser) return response(res, 403)

            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET_KEY,
                async (err, decoded) => {
                    if (err || matchedUser._id != decoded.userId)
                        return response(res, 403)

                    const accessToken = await JwtHelper.signAuthToken({
                        userId: matchedUser._id,
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