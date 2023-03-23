import express from "express"
import mongoose from "mongoose";
import { config } from "dotenv";
import { authMiddleware, cors } from "./middleware/index.js";
import { fileRouter, authRouter, refreshRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";
config()

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.u0jafxl.mongodb.net/?retryWrites=true&w=majority`
const app = express();

app.use(express.static('uploads'))
app.use(cors)
// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('/refresh', refreshRouter)
app.use(authMiddleware)
app.use('/files', fileRouter)

const start = async () => {
    try {
        app.listen(process.env.PORT, () => console.log("everythin is okay"))
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.log("Something went wrong during starting app")
    }
}

start()