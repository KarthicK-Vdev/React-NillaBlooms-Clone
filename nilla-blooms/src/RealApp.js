import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import App from './App';
import SignIn from './Components/SignIn';
import DisplayCart from './Components/DisplayCart';
import AdminPanel from './Components/AdminPanel';
import Order from './Components/Order';
import OrderDisplay from './Components/OrderDisplay';

const RealApp = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/home" element={<App/>}></Route>
        <Route path="/displaycart" element={<DisplayCart/>}></Route>
        <Route path="/adminpanel" element={<AdminPanel/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/orderdisplay" element={<OrderDisplay/>}></Route>
      </Routes>
    </div>
  )
}

export default RealApp