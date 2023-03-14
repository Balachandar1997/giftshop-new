
import mongoose from "mongoose";

const cardSchema=mongoose.Schema({
    title:String,
    id:String,
    price:String,
    image:String,
    rating:String
})

export default mongoose.model('cards',cardSchema)