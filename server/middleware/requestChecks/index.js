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

        console.log(requests, "REQUESTS");
        const user = await UserSchema.findOne({ ip: ip }, { blocked: 1 });
        console.log(user, "USER BLOCKED");
        if (user) {
            console.log("SECOND IF");
            return response(res, 429, "serv", "You have blocked temporary to create new template")
        }

        console.log(now - user.lastRequest < 120000, now, user.lastRequest, now - user.lastRequest, "DATA ELAQELI");
        if (requests.length > 0) {
            await UserSchema.findOneAndUpdate({ ip }, { blocked: true });
            return response(res, 429, "serv", "You have blocked temporary to create new template")
        }


        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};