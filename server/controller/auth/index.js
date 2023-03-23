import UserSchema from "../../models/User.js";
import createError from "http-errors"
import bcrypt from "bcryptjs"
import { JwtHelper } from "../../helper/jwt_helper.js";
import { response } from "../../helper/response.js";
import { config } from "dotenv"
config()


class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body

            const candidate = await UserSchema.findOne({ username })
            if (candidate)
                return response(res, 400, "user", { username })

            const hashPassword = await bcrypt.hash(password, 7)
            const user = await UserSchema.create({ username, password: hashPassword })
            await user.save()
            response(res, 200)
        } catch (err) {
            response(res, 500, { message: err.message })
            console.log(err);
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body

            const user = await UserSchema.findOne({ username })
            if (!user)
                return response(res, 404)

            const isPasswordValid = bcrypt.compareSync(password, user.password)
            if (!isPasswordValid)
                return response(res, 400, 'pass')

            const token = await JwtHelper.signAccessToken({ id: user._id })
            return res.json({
                token,
                user: {
                    username,
                    password
                }
            })
        } catch (err) {
            response(res, 404)
        }

    }
}

export const AuthController = new Auth()

