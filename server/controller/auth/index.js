class Auth {
    async registration(req, res) {
        const { username, password } = req.body
    }
    async login(req, res) {
        const { username, password } = req.body
    }
}

export const AuthController = new Auth()

