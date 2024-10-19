const mongoose= require("mongoose");

const detailsSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    phno:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    address:{
        type:String,
    },
    productName:{
        type:String,
    },
    price:{
        type:String,
    },
    totalprice:{
        type:Number,
    }

},{timestamps:true});

const detailsModel=mongoose.model("order details",detailsSchema);

module.exports=detailsModel;