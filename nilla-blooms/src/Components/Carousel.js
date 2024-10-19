import React, { useEffect } from 'react'
import "./Carousel.css";

import img1 from "./Carousel Images/img1.jpg"
import img2 from "./Carousel Images/img2.jpg"
import img3 from "./Carousel Images/img3.jpg"
import img4 from "./Carousel Images/img4.jpg"

import { useState } from 'react';

const Carousel = () => {
    const data=[
        {id:1,image:img1},
        {id:2,image:img2},
        {id:3,image:img3},
        {id:4,image:img4}
    ];
    const [current,setCurrent]=useState(0);
    const[autoplay,setAutoplay]=useState(true)
    let timeOut=null;

    useEffect(()=>{
        timeOut=autoplay && setTimeout(()=>{
            slideRight();
        },2500)
    })

    const slideRight=()=>{
        if(current === data.length-1)
        {
            setCurrent(0);
        }
        else
        {
            setCurrent(current+1)
        }
    }

    const slideLeft=()=>{
        if(current === 0)
        {
            setCurrent(data.length-1);
        }
        else
        {
            setCurrent(current-1)
        }
        //setCurrent(current-1)
    }

  return (
    <div className="carousel" onMouseEnter={()=>setAutoplay(false)} onMouseLeave={()=>setAutoplay(true)}>
        <div className="carousel-wrapper">
        {
        data.map((obj,index)=>(
            <div key={index} className={index==current ? "carousel-card carousel-card-active" : "carousel-card"}>
                <img src={obj.image}></img>
            </div>
            
        ))
        }   
        <div className='carousel-arrow-left' onClick={slideLeft}>&lsaquo;</div>
        <div className='carousel-arrow-right' onClick={slideRight}>&rsaquo;</div>
        </div>
        <div className="carousel-pagination">
        {
        data.map((_,index)=>(
            <div key={index} 
            className=
            {index===current ? "pagination-dot pagination-dot-active" : "pagination-dot"} onClick={()=>setCurrent(index)}>

            </div>
            
        ))
        }   
        </div>
     
     </div>
  )
}

export default Carousel