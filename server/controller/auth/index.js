import UserSchema from "../../models/User.js";
import createError from "http-errors"
import bcrypt from "bcryptjs"
import { JwtHelper } from "../../helper/jwt_helper.js";
import { errorMessage } from "../../helper/errorMessage.js";
import { config } from "dotenv"
config()


class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body

            const candidate = await UserSchema.findOne({ username })
            if (candidate)
                return errorMessage(res, 400, "user", { username })

            const hashPassword = await bcrypt.hash(password, 7)
            const user = await UserSchema.create({ username, password: hashPassword })
            await user.save()
            res.json({ user })
        } catch (err) {
            res.status(500).json({ message: err.message })
            console.log(err);
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body

            const user = await UserSchema.findOne({ username })
            if (!user)
                return errorMessage(res, 404, 'user')

            const isPasswordValid = bcrypt.compareSync(password, user.password)
            if (!isPasswordValid)
                return errorMessage(res, 400, 'pass')

            const token = await JwtHelper.signAccessToken({ id: user._id })
            return res.json({
                token,
                user: {
                    username,
                    password
                }
            })
        } catch (err) {

        }

    }
}

export const AuthController = new Auth()

