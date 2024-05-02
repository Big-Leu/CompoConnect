import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Validation from './LoginValidation'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

const clientId="730359726137-87bagq56m7gg1lg6qkk1180ddpcehajv.apps.googleusercontent.com"
function Login() {
   useEffect(()=>{
      function start(){
         gapi.client.init({
            clientId:clientId,
            scope:""
         })
      };
      gapi.load('client:auth2',start)
   });
   const OnSuccess=(res)=>{
      console.log("LOGIN SUCEESS! Current USer :",res.profileObj);
      Navigate('/home')
   }
   const OnFailure=(res)=>{
      console.log("LOGIN FAILED! res :",res);
      alert("No record existed");
   }
    const[values, setValues]= useState({
        email:'',
        password:''
    })
    const Navigate = useNavigate();
    const [errors,setErrors]= useState({})
    const handleInput = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      console.log(values)
    };
     const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email===""&&errors.password===""){
         console.log(process.env.BASE_URL)
         // Replace 'http://localhost:8081' with the environment variable
         axios.post('/login', values)
         .then(res=>{
            console.log(res.data)
            if(res.data.message==="Success"){
               alert("reached")
               Navigate('/home')
            } else{
               alert("No record existed");
            }
         })
         .catch(err=>console.log(err));
        }
     }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
       <div className='bg-white p-3 rounded w-25'>
          <form action="" onSubmit={handleSubmit}>
             <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email'
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.email&& <span className='text-danger'>{errors.email}</span>}
             </div>
             <div className='mb-3'>
                <label htmlFor="Password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter password' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password&& <span className='text-danger'>{errors.password}</span>}
             </div>
             <button type='submit' className='btn btn-success w-100'>Log in</button>
             <p>You are agree to our terms and policies</p>
             <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
             <div id="signInButton">
             <GoogleLogin
               clientId={clientId}
               buttonText="Login"
               onSuccess={OnSuccess}
               onFailure={OnFailure}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
               />
             </div>

          </form>
       </div>
    </div>
  )
}

export default Login