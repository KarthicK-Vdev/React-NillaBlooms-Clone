const mongoose=require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log(err);
})


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const user=mongoose.model("registrations",userSchema);

module.exports=user