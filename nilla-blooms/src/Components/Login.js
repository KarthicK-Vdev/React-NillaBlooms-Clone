import React from 'react'
import { useState } from 'react'
import "./loginsignin.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
//import { Link } from 'react-router-dom'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history=useNavigate()

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

    const changeHandler=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/",{name,password})
            .then((res)=>{
                if(res.data=="exist")
                    {
                        history("/home")
                    }
                else if(res.data=="notexist")
                    {
                        alert("user not exist")
                    }
            })
        }
        catch(error){
            console.log(error)
        }
        
    }

  return (
    <div className="main-container">
        <div className="login-container">
        <h1 className='head-text'>Login</h1>
        <form>
            <input type="text" placeholder='Enter your name' className="input" onChange={(e)=>{setName(e.target.value)}}></input>
            <input type="password" placeholder='Enter your password' className="input" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type='submit' className='button' onClick={changeHandler}>Login</button>
        </form>
        <p>Or</p>
        <Link to="/signin">Sign In</Link>
    </div>
            
        
        
    </div>
        
    
    
  )
}

export default Login