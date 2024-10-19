const express=require("express")
const app=express();
const cors=require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const PORT=3001;

const user=require("./mongo")

app.post("/",async(req,res)=>{
    const {name,password}=req.body;
    try{
        const userExist=await user.findOne({name:name})
    if(userExist)
        {
            res.json("exist")
        }
    else
    {
        res.json("notexist")
    }
    }
    catch(error){
        console.log(error)
    }
})

app.post("/signin",async(req,res)=>{
    const {name,password}=req.body;
    const data={
        name:name,
        password:password
    }
    try{
        const userExists=await user.findOne({name:name})
        if(userExists)
            {
                res.json("exist")
            }
        else
        {
            res.json("notexist")
            await user.insertMany([data]);
        }
    }
    catch(error)
    {
        res.json(error)
    }
    
})

const cart=require("./cartModel")
const order=require("./orderModel")

app.post("/tocart",async(req,res)=>{
    const {id,image,title,price}=req.body;
    const cartData={
        id:id,
        image:image,
        title:title,
        price:price
    }

    try {
        const findItem= await cart.findOne({id:id})
    if(findItem)
        {
            res.json("productexist")
        }
    else
    {
        res.json("notexist")
        await cart.insertMany([cartData])
    }  
    } catch (error) {
        
    }

})

app.get("/displaycart",async(req,res)=>{
    try {
        const displayData=await cart.find();

        
        res.json(displayData)
        
    } catch (error) {
        console.log(error)
        res.status(500).json("server error")
    }
})


app.post("/deleteitem",async(req,res)=>{

    const {id}=req.body
    try {
        const deleteItem= await cart.deleteOne({id:id});
        res.json("item deleted")
    } catch (error) {
        res.json(error)
    }
})

app.post("/orders", async(req, res)=>{
    const {data} = req.body;
    const orderData={
        id:data.id,
        image:data.image,
        title:data.title,
        price:data.price
    }
    console.log(data);
    try{
        const checkOrder=await order.findOne({id:orderData.id})
        if(checkOrder)
            {
                res.json('alreadyordered')
            }
        else
        {
            const insert = await order.insertMany([data])
            res.json("ordered")
        }
    }
    catch(err)
    {
        res.json(err);
    }
})

const detailsModel=require("./orderDetailsModel");

app.post("/orderdetails",async(req, res)=>{
    const {name,phno,qty,address}=req.body;
    const product = await order.findOne();
    const detailsData={
        name:name,
        phno:phno,
        quantity:qty,
        address:address,
        productName:product.title,
        price:product.price,
        totalprice: parseInt(product.price)*qty,
    }
    try{
        console.log(detailsData)
        const customerDetails= await detailsModel.insertMany([detailsData]);
        const orderDeleted = await order.deleteOne({title:product.title})
        if(customerDetails)
            {
                res.json("ordered")
            }
    }
    catch(err)
    {
        res.json("error occured")
        console.log(err);
    }
})

app.get("/fetchorder",async(req,res)=>{
    try {
        const data= await detailsModel.find();
        res.json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json("server error")
    }
})

app.listen(PORT,()=>{
    console.log("Server is running on the port",PORT)
})