import { Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import Date from './Date'
import Loading from '../Components/Pages/Loading'
import { useRef } from 'react'
import Otpfun from './Otp'
function Payment() {
  const [state,setstate] = useState(true)
  const dref = useRef({})
let data = JSON.parse(sessionStorage.getItem("summary"))
let total = JSON.parse(sessionStorage.getItem("total"))
const [otp,setotp] = useState(false)
console.log(data)
    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);
        
        },[])

const handleclick=(e)=>{
  e.preventDefault()
let card = (dref.current['card'].value)
let cvv =(dref.current['cvv'].value)

if(card==""|| cvv==""){
  alert("Please fill all the details")
}else{
  alert("OTP : 1234")
  setotp(true)
  
}


}



  return ( state?<Loading />
  :<>
  <Heading textAlign={'center'}>Payments</Heading>
  <hr />
 <div id='payment-cont'>
    <div id='summary' style={{padding:"20px",border:"1px solid gray",backgroundColor:"black"}}>

       <Heading size='lg' color={"white"}>Order Summary 🛍️</Heading> 
  <hr />
  <Heading as='h4' size='md' lineHeight={"70px"} fontFamily={"sans-serif"} color={"white"}>
    Name : {data.name}
  </Heading>
  <hr />
       <Heading as='h4' size='md' lineHeight={"70px"} fontFamily={"sans-serif"} color={"white"}>
    Email : {data.email}
    
  </Heading>
  <hr />
  <Heading as='h4' size='md' lineHeight={"70px"} fontFamily={"sans-serif"} color={"white"}>
   Address :{data.houseno}{" ,"}{data.city}{" ,"}{data.district}
  </Heading>
  <hr />
  <Heading as='h3' size='md' lineHeight={"70px"} fontFamily={"sans-serif"} color={"white"}>
  Contact No :{data.contact}
  </Heading>
  <hr />
  <Heading as='h3' size='md' lineHeight={"70px"} fontFamily={"sans-serif"} color={"white"}>
    Total Price : ${total}{" "} USD
  </Heading>
    </div>
    <div id='card-details'>
     Enter Card details
     <hr />
     <form action="" style={{marginTop:"30px"}}>
     <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
  <FormLabel>Card Number</FormLabel>
  <Input placeholder='Enter Your Card Number' ref={e=>dref.current['card']=e} type={"number"}/>
 
{<Date />}
  <FormLabel>CVV</FormLabel>
  <Input placeholder='Enter Your CVV' type={"number"} ref={e=>dref.current['cvv']=e}/>
</FormControl>
<button type="submit" className='payment-sub' onClick={handleclick}>
   PAY
</button>

     </form>
    {otp && <Otpfun />}
    </div>
    </div>
      

    </>
  )
}

export default Payment