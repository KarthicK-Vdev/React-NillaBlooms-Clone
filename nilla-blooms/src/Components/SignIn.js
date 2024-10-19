import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import "./loginsignin.css";

const SignIn = () => {
    
    const [name,setSName]=useState("");
    const [password,setSPassword]=useState("")

    const history=useNavigate();

    const changeHandler=async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3001/signin",{name,password})
        .then((res)=>{
            if(res.data==="exist")
                {
                    alert("user is already exist")
                }
            else if(res.data==="notexist")
            {
                history("/")
            }
        })
        }
        catch(err)
        {
            console.log(err)
        }
        
    }
  return (
    <div className="main-container">
        <div className="login-container">
        <h1 className='head-text'>Sign In</h1>
        <form>
            <input type="text" placeholder='Enter your name' className="input" onChange={(e)=>{setSName(e.target.value)}}></input>
            <input type="password" placeholder='Enter your password' className="input" onChange={(e)=>{setSPassword(e.target.value)}}></input>
            <button type='submit' className='button' onClick={changeHandler}>Sign In</button>
        </form>
        <p>Or</p>
        <Link to="/">Login</Link>
    </div>
    </div>
  )
}

export default SignIn