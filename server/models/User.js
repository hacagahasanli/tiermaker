import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdLists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
});

export default model('Users', UserSchema)