import React from 'react'
import cardimg1 from "./Card Images/cardimg1.webp";
import cardimg2 from "./Card Images/cardimg2.webp";
import cardimg3 from "./Card Images/cardimg3.webp";
import cardimg4 from "./Card Images/cardimg4.webp";
import cardimg5 from "./Card Images/cardimg5.webp";
import cardimg6 from "./Card Images/cardimg6.webp";
import cardimg7 from "./Card Images/cardimg7.webp";

import { useState } from 'react';

import "./Card.css";

import { FaStar } from "react-icons/fa";
import axios from 'axios';


const Card = () => {

  const data=[{
    id:0,
    image:cardimg1,
    title:"Mix Flower Basket",
    price:"1600"
  },
  {
    id:1,
    image:cardimg2,
    title:"Wonderful Delight",
    price:"1400"
  },
  {
    id:2,
    image:cardimg3,
    title:"Ribbon Of Yellow Rust",
    price:"2300"
  },
  {
    id:3,
    image:cardimg4,
    title:"Moment Of Rose",
    price:"4000"
  },
  {
    id:4,
    image:cardimg5,
    title:"Red Roses Bouquet",
    price:"4500"
  },
  {
    id:5,
    image:cardimg6,
    title:"Sunshine Love",
    price:"3500"
  },
  {
    id:6,
    image:cardimg7,
    title:"Heart Roses",
    price:"3000"
  }

]

  const [sLimit,setSLimit]=useState(0);
  const [eLimit,setELimit]=useState(3);

  const cardSlideRight=()=>{
    if(eLimit===data[data.length-1].id)
    {
      setELimit(()=>0)
      //setELimit(eLimit+1)
    }
    else
    {
      setELimit(eLimit+1)
    }
    if(sLimit===data[data.length-1].id)
    {
      setSLimit(()=>0)
      //setSLimit(sLimit+1)
    }
    else
    {
      setSLimit(sLimit+1)
    }
    console.log(sLimit)
    console.log(eLimit)
    //console.log(data[data.length-1].id)
  }
  const cardSlideLeft=()=>{
    if(sLimit===0)
      {
        setSLimit(()=>data[data.length-1].id);
      }
    else
    {
      setSLimit(sLimit-1)
    }
    if(eLimit===0)
      {
        setELimit(()=>data[data.length-1].id)
      }
      else
      {
        setELimit(eLimit-1)
      }
      console.log(eLimit)
      console.log(sLimit)
  }
  let slicedData=null;
  if(sLimit<eLimit)
  {
      slicedData=data.slice(sLimit,eLimit+1);
  }
  else
  {
      slicedData=data.slice(eLimit,sLimit)
  }
  //console.log(slicedData)

  const addToCart= async (id,image,title,price)=>{

    await axios.post("http://localhost:3001/tocart",{id,image,title,price})
  }


  const dataDisplay=slicedData.map((data,index)=>{
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
      <button className="card-btn" onClick={()=>{
        addToCart(data.id,data.image,data.title,data.price)
      }}>Add to Cart</button>
    </div>
      )
    
})


  return (
    <>
    <div className="selling-products">Top Selling products</div>
    <div className="main-container">
      {dataDisplay}
      <div className="card-arrow-left" onClick={cardSlideLeft}>&lsaquo;</div>
      <div className="card-arrow-right" onClick={cardSlideRight}>&rsaquo;</div>
    </div>
    </>
    
  )
}

export default Card