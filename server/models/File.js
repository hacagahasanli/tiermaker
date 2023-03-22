import mongoose, { Schema, model } from "mongoose";


const FileSchema = new Schema({
    templateName: { type: String, required: true },
    coverPhoto: { type: String, required: true },
    tierlistImages: [{ type: String, required: true }],
    templateDescription: { type: String, required: true },
    selectImageOrientation: { type: String, required: true },
    selectCategory: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default model("Files", FileSchema)