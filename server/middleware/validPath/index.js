import { validPaths } from "../../constants/index.js";
import url from "url";

export const isValidPath = (req, res, next) => {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;

    if (!validPaths.includes(path)) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Error: The requested URL not found')
    }
    next()
}