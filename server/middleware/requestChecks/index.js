import { response } from "../../helper/response.js";
import UserSchema from "../../models/User.js"

export const rateLimit = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.jwt
        const now = Date.now();
        const twoMinuteAgo = now - 2 * 60 * 1000;

        const requests = await UserSchema.find({
            refreshToken,
            lastRequest: { $gt: twoMinuteAgo },
        });

        const blockedMessage = () => {
            response(res, 429, "serv", "You have blocked temporary to create new template")
        }

        const user = await UserSchema.findOne({ ip: ip }, { blocked: 1 })?.blocked;
        if (user) {
            return blockedMessage()
        }

        if (requests.length > 3 && now - user.lastRequest < 120000) {
            await UserSchema.findOneAndUpdate({ refreshToken }, { blocked: true });
            return blockedMessage()
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};