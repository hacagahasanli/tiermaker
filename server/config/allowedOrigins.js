import { config } from "dotenv"
config()


const allowedOrigins = [
    process.env.ALLOWED_ORIGIN_1,
    process.env.ALLOWED_ORIGIN_2
]

export default allowedOrigins