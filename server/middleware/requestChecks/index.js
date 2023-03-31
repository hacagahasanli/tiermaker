import { response } from "../../helper/response.js";
import UserSchema from "../../models/User.js"

export const rateLimit = async (req, res, next) => {
    try {
        const ip = req.ip
        const now = Date.now();
        const twoMinuteAgo = now - 2 * 60 * 1000;

        const requests = await UserSchema.find({
            ip,
            lastRequest: { $gt: twoMinuteAgo },
        });

        const user = await UserSchema.findOne({ ip: ip }, { blocked: 1 });

        if (user)
            return response(res, 429, "serv", { message: "You have blocked temporarily to create new template" })

        if (requests.length > 2 && now - user.lastRequest < 120000) {
            await UserSchema.findOneAndUpdate({ ip }, { blocked: true });
            return response(res, 429, "serv", { message: "You have blocked temporarily to create new template" })
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};