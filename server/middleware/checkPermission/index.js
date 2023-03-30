import UserSchema from "../../models/User.js";

export const checkPermission = async (req, res, next) => {
    const jwt = req.cookies.jwt

    const isValidUser = await UserSchema.findOne({ refreshToken: jwt })
    if (!isValidUser) {
        res.status(403).json("You have no permission to create a file")
        return;
    }

    next()
}