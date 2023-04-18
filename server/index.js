import express from "express"
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors"
import { authMiddleware, isValidPath, filePath } from "./middleware/index.js";
import { fileRouter, authRouter, refreshRouter, logoutRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";
import path from "path";
config()

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.u0jafxl.mongodb.net/?retryWrites=true&w=majority`
const app = express();

const corsConfig = {
    origin: true,
    credentials: true,
};
app.use(express.static('uploads'))
app.use(cors(corsConfig));
app.options('*', cors(corsConfig))
// app.use(filePath(path.resolve(__dirname, "uploads")))
app.use(isValidPath)
app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('/refresh', refreshRouter)
app.use('/logout', logoutRouter)
app.use(authMiddleware)
app.use('/files', fileRouter)

const start = async () => {
    try {
        app.listen(process.env.PORT, () => console.log("everythin is okay " + process.env.PORT))
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        })
    } catch (err) {
        console.log("Something went wrong during starting app")
    }
}

start()