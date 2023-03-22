import UserSchema from "../../models/User.js";
class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body
            const createdUser = await UserSchema.create({ username, password })
            res.json({ user: createdUser })
        } catch (err) {
            console.log(err);
        }
    }
    async login(req, res) {
        const { username, password } = req.body
        res.json({ username, password })
    }
}

export const AuthController = new Auth()

