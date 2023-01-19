import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'
  import { useNavigate } from "react-router-dom";
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
  
function Address() {
  const navigate = useNavigate();
  const dref = useRef({})
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log("ok")
    
    return navigate("/payments")

}





  return<div style={{marginTop:"20px"}}>
<form action="" onSubmit={handlesubmit}>
<FormControl onSubmit={handlesubmit}>
  <FormLabel>First name</FormLabel>
  <Input name="First Name" placeholder='Enter Your First name' ref={dref} />
  <FormLabel>Last Name</FormLabel>
  <Input name="Last Name"  placeholder='Enter Your Last name' />
  <FormLabel>Email</FormLabel>
  <Input name="Email"  placeholder='Enter Your Email' />
  <FormLabel>City</FormLabel>
  <Input name="City"  placeholder='Enter Your City' />
  <FormLabel>District</FormLabel>
  <Input name="District"  placeholder='Enter Your District' />
  <FormLabel>House No</FormLabel>
  <Input name="House No"  placeholder='Enter Your House No' />
  <FormLabel>Contact No</FormLabel>
  <Input name="Contact No"  placeholder='Enter Your Contact No' />
</FormControl>

<button className='submit-address' type="submit" onSubmit={handlesubmit}>Submit</button>
</form>
    </div>
  
}

export default Address