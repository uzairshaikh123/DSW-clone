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
    let name= dref.current['name'].value
    let last= dref.current['lastname'].value
    let email= dref.current['email'].value
    let city= dref.current['city'].value
    let district= dref.current['district'].value
    let houseno= dref.current['houseno'].value
    let contact= dref.current['contact'].value

let obj={
  name,last,email,city,district,houseno,contact
}
localStorage.setItem("summary",JSON.stringify(obj))

    return navigate("/payments")

}





  return  <form action="" onSubmit={handlesubmit} style={{marginTop:"20px"}}>
<FormControl onSubmit={handlesubmit} isRequired>
  <FormLabel>First name</FormLabel>
  <Input name="First Name" placeholder='Enter Your First name' ref={e=>dref.current['name']=e} />
  <FormLabel>Last Name</FormLabel>
  <Input name="Last Name"  placeholder='Enter Your Last name' ref={e=>dref.current['lastname']=e}  />
  <FormLabel>Email</FormLabel>
  <Input name="Email"  placeholder='Enter Your Email' ref={e=>dref.current['email']=e} />
  <FormLabel>City</FormLabel>
  <Input name="City"  placeholder='Enter Your City' ref={e=>dref.current['city']=e} />
  <FormLabel>District</FormLabel>
  <Input name="District"  placeholder='Enter Your District' ref={e=>dref.current['district']=e}  />
  <FormLabel>House No</FormLabel>
  <Input name="House No"  placeholder='Enter Your House No' ref={e=>dref.current['houseno']=e}  />
  <FormLabel>Contact No</FormLabel>
  <Input name="Contact No"  placeholder='Enter Your Contact No' ref={e=>dref.current['contact']=e}  />
</FormControl>

<button className='submit-address' type="submit" onSubmit={handlesubmit}>Submit</button>
</form>

  
}

export default Address