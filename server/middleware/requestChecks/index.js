import { response } from "../../helper/response.js";
import UserSchema from "../../models/User.js"

export const rateLimit = async (req, res, next) => {
    try {
        const ip = req.ip;
        const now = Date.now();
        const twoMinuteAgo = now - 2 * 60 * 1000;

        const requests = await UserSchema.find({
            ip: ip,
            timestamp: { $gt: twoMinuteAgo },
            blocked: false
        });

        const blockedMessage = () => {
            response(res, 429, "serv", "You have blocked temporary to create new template")
            return;
        }

        if (requests.length > 2 && now - user.lastRequestTime < 120000) {
            await UserSchema.updateMany({ ip }, { blocked: true });
            blockedMessage()
        }

        const user = await UserSchema.findOne({ ip: ip }, { blocked: 1 })?.blocked;
        if (user) {
            blockedMessage()
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};