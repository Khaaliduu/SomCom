import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Waxaa laga saarayaa meelaha bannaan
    },
    video: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Waa in waqtiga uu noqdo Number (seconds, minutes)
        required: true,
        min: 1, // Waa in uu ka badan yahay 1 ilbiriqsi
    },
}, { timestamps: true }); // Si loo kaydiyo createdAt iyo updatedAt

export default videosSchema;
