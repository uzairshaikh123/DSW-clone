import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text,
  } from '@chakra-ui/react'
  import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useRef } from 'react'
import { AuthContext } from '../AuthContext/Data';
import { useContext } from 'react';
import Error from './Error';
function Formfun() {
  const navigate = useNavigate();
    const [input, setInput] = useState('')
    const Authobj = useContext(AuthContext)
    const dref = useRef({})
    let {loginuser,storeuser,user} = Authobj
    const [state,setstate] = useState(false)
    const handleregister=()=>{

    navigate("/register")

    }

    const handlesubmit=(e)=>{
e.preventDefault()
let email=(dref.current['email'].value)
let password=(dref.current['password'].value)

let data=(JSON.parse(localStorage.getItem("data")))
for(let i=0;i<data.length;i++){
  if(data[i].email==email && data[i].password==password){
    storeuser(data[i].name,data[i].email)
loginuser()
navigate("/")
setstate(true)

alert("You have successfully logged in")
break;
  }else{
    console.log(false)
  }
}



    }
  
    const handleInputChange = (e) =>{
      setInput(e.target.value)
    
    }
      
  if(user){
  return  navigate("/")
  }
  
    return (
      <form action="" onSubmit={handlesubmit}>
        
    
      <FormControl>
        
        <FormLabel color={"black"} fontSize={"20px"}>Email</FormLabel>
        <Input type='email' onChange={handleInputChange} ref = {e=>dref.current['email']=e}  color={"black"}  />
       
          <FormErrorMessage>Email is required.</FormErrorMessage>
       
         <FormLabel color={"black"} fontSize={"20px"}>Password</FormLabel>
        <Input type='password' onChange={handleInputChange} ref = {e=>dref.current['password']=e} color={"black"} />
        
          <FormErrorMessage>Password is required.</FormErrorMessage>
       
         <span className='forget'>Forget Password</span>
         <br />
         <span className='forget'>Forget email</span>
         <br />
         <span className='forget' style={{color:"blue",fontSize:"20px"}} onClick={handleregister}>Register</span>
        <button className='add' type="submit" onSubmit={handlesubmit}>Sign In</button>
      </FormControl>
      </form>

    )
  }
export default Formfun