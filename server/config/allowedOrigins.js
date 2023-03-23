import { config } from "dotenv"
config()


const allowedOrigins = [
    process.env.ALLOWED_ORIGIN_1
]

export default allowedOrigins