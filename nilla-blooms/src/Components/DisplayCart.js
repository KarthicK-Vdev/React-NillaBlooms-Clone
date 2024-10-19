import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DisplayCart = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderPage, setOrderPage]=useState(false);
  const history=useNavigate();

  useEffect(() => {
    console.log('Fetching cart data...');
    fetch('http://localhost:3001/displaycart')
      .then((res) => {
        console.log('Response:', res);
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Cart data fetched:', data);
        setCartData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const deleteHandler=async(id)=>{
      await axios.post("http://localhost:3001/deleteitem",{id})
      .then((res)=>{
        res.json("data have been deleted")
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const orderHandler = async(data)=>{
    console.log(data)
    await axios.post("http://localhost:3001/orders",{data})
    .then((res)=>{
        history("/order");
        res.json("ordered successfully");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cartItems=cartData.map((data,index)=>{
    //if(data.id>=sLimit && data.id <=eLimit){
      return(
    <div key={data.id} className="box">
      <div className="card">
          <div className="card-image">
              <img src={data.image} alt="images"></img>
          </div>
          <div className="desc">
              <h2>{data.title}</h2>
              <h4>{data.price}</h4>
          </div>
          <div className="star">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
          </div>
      </div>
      <button className="card-btn" onClick={()=>{deleteHandler(data.id)}}>Remove From Cart</button>
      <button className="order-btn" onClick={()=>orderHandler(data)}>Order now</button>
    </div>
      )
    
})

  return (
    <div>
      <h1 className="cart-text">Cart Items</h1>
    <div className="main-container">
      {cartItems}
      {/* <div className="card-arrow-left" onClick={cardSlideLeft}>&lsaquo;</div>
      <div className="card-arrow-right" onClick={cardSlideRight}>&rsaquo;</div> */}
    </div>
    <div className='order-text'>Go to Order Page to Complete Order process</div>
    </div>
  );
};

export default DisplayCart;
