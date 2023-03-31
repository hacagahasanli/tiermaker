import UserSchema from "../../models/User.js";
import createError from "http-errors"
import bcrypt from "bcryptjs"
import { response } from "../../helper/response.js";
import { JwtHelper } from "../../helper/jwt_helper.js";
import { config } from "dotenv"
config()


class Auth {
    async registration(req, res) {
        try {
            const ip = req.ip
            const { username, password } = req.body
            console.log({ username, password })
            const candidate = await UserSchema.findOne({ username })
            if (candidate)
                return response(res, 400, "user", { message: `User with username ${username} has already exist` })

            const hashPassword = await bcrypt.hash(password, 7)
            const user = await UserSchema.create({ username, password: hashPassword, ip, blocked: false })

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
            const ip = req.ip

            if (!username || !password)
                return response(res, 400, { message: 'Username and password are required.' })

            const user = await UserSchema.findOne({ username }).maxTimeMS(10000).exec()

            if (!user)
                return response(res, 401)

            const isPasswordValid = bcrypt.compareSync(password, user.password)

            if (!isPasswordValid)
                return response(res, 400, 'pass')

            if (isPasswordValid) {
                const accessToken = await JwtHelper.signAuthToken({
                    userId: user._id,
                    secretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
                    ei: '230s'
                })

                const refreshToken = await JwtHelper.signAuthToken({
                    userId: user._id,
                    secretKey: process.env.REFRESH_TOKEN_SECRET_KEY,
                    ei: '1d'
                })

                const updatedUser = await UserSchema.findOneAndUpdate(
                    { username: user.username },
                    { refreshToken, ip },
                    { new: true }
                )
                res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: "None" })
                return res.json({ accessToken })
            }
        } catch (error) {
            response(res, 404)
            if (error.name === 'MongooseTimeoutError')
                console.error('Query timed out:', error);
            else
                console.error('Query error:', error);

            console.log(error);
        }

    }
}

export const AuthController = new Auth()

