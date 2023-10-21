import mongoose from "mongoose";
const  postModel=mongoose.Schema({
    user:String,
    imgame:String,
    text: String,
    avatar: String,
    timestamp: String
})

export default mongoose.model('posts', postModel)