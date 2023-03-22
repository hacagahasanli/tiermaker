import UserSchema from "../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { config } from "dotenv"
config()


class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body

            const candidate = await UserSchema.findOne({ username })
            if (candidate)
                return res.status(400).json({ message: `User with username ${username} already exist` })

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
        const { username, password } = req.body

        const user = await UserSchema.findOne({ username })
        if (!user)
            return res.status(404).json({ message: `User  not found` })

        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid password" })
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '24h' })
        return res.json({
            token,
            user: {
                username,
                password
            }
        })
    }
}

export const AuthController = new Auth()

