import './App.css';
import { IoLocationOutline } from "react-icons/io5";
import { GrMailOption } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';

import logo from "./Images/logo.jpg";
import DropDown from './Components/DropDown';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import { Link } from 'react-router-dom';
function App() {
  const [flower,setFlower]=useState(false)
  return (
    <>
      <div className="top-nav">
        <div className="top-logo">
          <div><IoLocationOutline /> Store Location  | </div>
          <div><GrMailOption /> info@nillablooms.com</div>
        </div>
        <div className="order">Order Tracking</div>
      </div>
      <div className="main-nav">
      <div className="image">
        <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="search">
        <div><input type='text' className="search-bar" placeholder="Search..."></input></div>
        <div className="search-icon"><IoIosSearch /></div>
      </div>
      <div className="cart-items">
        <div><IoPersonOutline className="person" /></div>
        <div><FaRegHeart className="heart"/></div>
        <div><Link to="/displaycart"><IoBagOutline className="bag" /></Link></div>
      </div>
      </div>
      <div  className="nav-bar">
          <span>HOME</span>
          <span>FLOWER</span>
          <span className="flower-delivery" onMouseEnter={()=>setFlower(true)}
           onMouseLeave={()=>setFlower(false)}>FLOWER DELIVERY
          <span className='arr'><RiArrowDropDownLine className="arrow-drop" /></span></span>
          <span>CAKES & SWEETS</span>
          <span>SAMEDAY/MIDNIGHT DELIVERY</span>
          <span>SEND GIFTS BY LOCATION</span>
          <span>SPECIAL OCCASION</span>
      </div>
      <div>
      <div className={flower?"flower-dropdown clicked" : "flower-dropdown unclicked"} onMouseEnter={()=>setFlower(true)} onMouseLeave={()=>setFlower(false)}>
        <DropDown/>

        </div>
      <div className="carousel-component"><Carousel/></div>
      </div>
      
      <div className="product-display"><Card/></div>
      
    </>
  );
}

export default App;
