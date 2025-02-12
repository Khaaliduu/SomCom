import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Waa in uu noqdo ObjectId oo tixraacaya User Model
        ref: 'User', // Waxaa uu la xiriirayaa User Model
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Lama oggola wax ka yar 0
        max: 5, // Lama oggola wax ka badan 5
    },
}, { timestamps: true });

export default ratingSchema;
