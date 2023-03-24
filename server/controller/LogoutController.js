import { response } from "../helper/response.js";
import UserSchema from "../models/User.js";

class LogoutController {
    async logoutHandler(req, res) {
        try {
            const cookies = req.cookies
            if (!cookies?.jwt) return response(res, 204, "serv")

            const refreshToken = cookies.jwt

            const matchedUser = await UserSchema.findOne({ refreshToken })
            if (!matchedUser) {
                res.clearCookie('jwt', { httpOnly: true })
                return response(res, 204, "serv")
            }

            await UserSchema.findByIdAndUpdate(
                matchedUser._id,
                { $set: { refreshToken: '' } },
            )

            res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: "None" })
            response(res, 204, "serv")

        } catch (err) {
            response(res, 404)
            console.log(err);
        }
    }
}


export default new LogoutController()