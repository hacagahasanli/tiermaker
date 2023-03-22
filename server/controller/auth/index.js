class Auth {
    async registration(req, res) {
        try {
            const { username, password } = req.body
            console.log(username, password)
            res.json({ username, password })
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

