import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
export const LoginPage = () => {
//  console.log('test');
 const [loginData,setLoginData]=useState({

  username :'',
  password :'',
 })


 //submit function

 const handleLoginSubmit= async (e)=>{
  e.preventDefault();
  try {
    const response = await axios.post(`${process.env. REACT_APP_BASE_URL}login`, loginData);
    const { success, message } = response.data;

    if (success) {
      console.log('Login successful');
    } else {
      console.log(message);
    }
  } catch (error) {
    console.error('Login error', error);
  }
};

 const  handleLoginChange =(e)=>{

  console.log(e);
  const {name,value}=e.target;
  console.log(`Updating ${name} to: ${value}`);
  setLoginData((prevData)=>({
    ...prevData,
    [name]:value


  }))


 }
    return (
    
    <div>
    <h1> LoginPage       </h1>
    <form onSubmit={handleLoginSubmit}>
      <input type='text' name ='username' placeholder='User Email' required  onChange={handleLoginChange} value={loginData.username}></input>
      <input type='password' name ='password' placeholder='password' required  onChange={handleLoginChange} value={loginData.password}></input>
      <button type='submit'>Login </button>
      <p> Not registered yet ?
      
      <Link to='/registration'>Register here</Link>



      </p>

    </form>
    
    
    
    
    
    </div>
  )
}
export default LoginPage;

