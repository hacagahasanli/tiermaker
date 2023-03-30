import mongoose, { Schema, model } from "mongoose";


const FileSchema = new Schema({
    templateName: { type: String, required: true },
    coverPhoto: { type: String, required: true },
    tierlistImages: [{ type: Object, required: true }],
    templateDescription: { type: String, required: true },
    selectImageOrientation: { type: String },
    selectCategory: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default model("Files", FileSchema)