import { JwtHelper } from "../helper/jwt_helper.js";
import { response } from "../helper/response.js";
import UserSchema from "../models/User.js";

class LogoutController {
    async logoutHandler(req, res) {
        // on client, also delete the accessToken
        try {
            const cookies = req.cookies
            if (!cookies?.jwt) return response(res, 204, "serv")

            const refreshToken = cookies.jwt

            const matchedUser = await UserSchema.findOne({ refreshToken })
            if (!matchedUser) {
                res.clearCookie('jwt', { httpOnly: true })
                return response(res, 204, "serv")
            }

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


export default new LogoutController()