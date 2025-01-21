// import mongoose from 'mongoose';
import mongoose from 'mongoose';
import ratingSchema from './ratingsModel.js';
const courseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },
    
    video:{
        type:String,
        required:true
    },
    
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    
    countInStock:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    ratings:[ratingSchema]
})
const Course = mongoose.model('courses', courseSchema)
export default Course
// const 