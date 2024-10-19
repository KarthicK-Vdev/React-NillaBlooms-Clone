const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
    
})


const cart=mongoose.model("Add To Cart",cartSchema);

module.exports=cart