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
function Payment() {
  const [state,setstate] = useState(true)

    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);
        
        },[])
  return ( state?<Loading />
  :<>
  <Heading textAlign={'center'}>Payments Page</Heading>
 <div id='payment-cont'>
    <div id='summary' style={{padding:"20px"}}>

       <Heading size='lg'>Summary</Heading> 
  <hr />
       <Heading as='h4' size='md' lineHeight={"70px"}>
    Email :
  </Heading>
  <Heading as='h4' size='md' lineHeight={"70px"}>
   Address :
  </Heading>
  <Heading as='h4' size='md' lineHeight={"70px"}>
  Contact No :
  </Heading>
  <Heading as='h4' size='md' lineHeight={"70px"}>
   Quantity :
  </Heading>
  <Heading as='h4' size='md' lineHeight={"70px"}>
    Total Price:
  </Heading>
    </div>
    <div id='card-details'>
     Enter Card details
     <hr />
     <form action="">
     <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
  <FormLabel>Card Number</FormLabel>
  <Input placeholder='Enter Your Card Number' type={"number"}/>
 
{<Date />}
  <FormLabel>CVV</FormLabel>
  <Input placeholder='Enter Your CVV' type={"number"}/>
</FormControl>
<button type="submit" className='payment-sub'>
    Submit
</button>
     </form>
    
    </div>
        
    </div>
    </>
  )
}

export default Payment