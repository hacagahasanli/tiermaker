import UserSchema from "../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body

            const candidate = await UserSchema.findOne({ username })
            if (candidate)
                return res.status(400).json({ message: `User with username ${username} already exist` })

            const hashPassword = bcrypt(password, 7)
            const user = await UserSchema.create({ username, password: hashPassword })
            await user.save()
            res.json({ user: createdUser })
        } catch (err) {
            console.log(err);
        }
    }
    async login(req, res) {
        const { username, password } = req.body

        const user = await UserSchema.findOne({ username })
        if (!candidate)
            return res.status(404).json({ message: `User  not found` })

        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid password" })
    }
}

export const AuthController = new Auth()

