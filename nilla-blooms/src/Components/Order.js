import React, { useState } from 'react'
import "./order.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Order = () => {
  const [name,setName]=useState("");
  const [phno,setPhno]=useState("");
  const [qty, setQty]=useState("");
  const [address, setAddress]=useState("");

  const history = useNavigate()

  const formValues=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:3001/orderdetails",{name,phno,qty,address})
    .then((res)=>{
      if(res.data==="ordered")
        {

          console.log("ordered")
          history("/orderdisplay")
          //res.json("ordered successfully")
        }
    })
    .catch((error,res)=>{
      console.log(error)
      res.json(error)
  })
  }
  return (
    <div className="order-page">
        <div className="order-page-text">Order the product</div>
        <form className="order-form" onSubmit={formValues}>
            <label>Name:</label><br></br>
            <input type="text" onChange={(e)=>setName(e.target.value)} ></input><br></br>
            <label>Phone number:</label><br></br>
            <input type="text" onChange={(e)=>setPhno(e.target.value)} ></input><br></br>
            <label>Quantity:</label><br></br>
            <input type="number" onChange={(e)=>setQty(e.target.value)} ></input><br></br>
            <label>Address:</label><br></br>
            <textarea onChange={(e)=>setAddress(e.target.value)}></textarea><br></br>
            <button type="submit">Order</button>
        </form>
    </div>
  )
}

export default Order