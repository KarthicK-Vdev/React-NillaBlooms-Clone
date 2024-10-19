const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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

const orderModel = mongoose.model('Order',orderSchema);
module.exports=orderModel;