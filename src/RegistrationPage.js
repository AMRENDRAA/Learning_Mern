import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const RegistrationPage = () => {

const [RegistrationData,setRegistrationData]=useState({
    username:'',
    password:''
  
  })

const handleRegistrationChange=(e)=>{

  const {name ,value}=e.target;
  setRegistrationData((prevData)=>({

    ...prevData,
    [name]:value,

  }))

}
const handleRegistrationSubmit=async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.post('http://localhost:8000/register',RegistrationData);
    console.log(response.data );
  }catch(error){
    console.log(error);
  }

  setRegistrationData({
    username:'',
    password:'',
  })




}

  return (
    <div>

<h1> Registration Form </h1>
    <form onSubmit={handleRegistrationSubmit}>
    
    <input type='text' name='username ' placeholder='username ' onchange={handleRegistrationChange} value={RegistrationData.username} required></input>
    
     <input type='password' name='password' placeholder='password' onchange={handleRegistrationChange} value={RegistrationData.username} required></input>
    <button type='submit'>Register</button>
    <p>Already Registered 
    <Link to="/login">Login Here </Link>


    </p>
    
      </form>





    </div>
    

  )
}
export default RegistrationPage;