import { model, Schema } from "mongoose";
const urlSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true
    }
})

export const urlModel = model('url',urlSchema) 