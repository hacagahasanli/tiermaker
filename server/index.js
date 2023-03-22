import express from "express"
import mongoose from "mongoose";
import { config } from "dotenv";
import { cors } from "./middleware/index.js";
import { fileRouter, authRouter } from "./routes/index.js";
config()

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.u0jafxl.mongodb.net/?retryWrites=true&w=majority`
const app = express();

app.use(cors)
app.use(express.json())
app.use(express.static('static'))
app.use('/files', fileRouter)
app.use('/auth', authRouter)

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