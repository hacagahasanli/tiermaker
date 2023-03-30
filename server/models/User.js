import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
    createdLists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
    blocked: { type: Boolean, default: false },
    ip: { type: String }
});

export default model('Users', UserSchema)