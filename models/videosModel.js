import mongoose from "mongoose";

const videosSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    video:{
        type:String,
        required:true
    },
    
    duration:{
        type:String,
        required:true
    },
    

});

export default videosSchema

