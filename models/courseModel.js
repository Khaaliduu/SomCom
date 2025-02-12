import mongoose from 'mongoose';
import ratingSchema from './ratingsModel.js';
import videosSchema from './videosModel.js';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Meelaha bannaan ayaa laga saarayaa
    },
    image: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Lama oggola in uu noqdo qiime taban (-)
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Waa inuu ka imanayaa User Model
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Waa inuu ka imanayaa Category Model
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true, // Meelaha bannaan ayaa laga saarayaa
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0, // Lama oggola in uu noqdo mid taban (-)
    },
    videos: [videosSchema], // Liiska videos-ka course-ka
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 5, // Rating waa inuu ahaado 0 ilaa 5
    },
    ratings: [ratingSchema], // Liiska rating-yada
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
