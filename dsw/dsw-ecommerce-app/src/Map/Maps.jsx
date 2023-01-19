import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loading from '../Components/Pages/Loading';

function Maps() {
  const [state,setstate] = useState(true)

    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);
        
        },[])
  return (state?<Loading/> :
    <div style={{margin:"auto",width:"80%",marginTop:"50px"}}>
        <Heading>Find Our Stores</Heading>
        <hr />
        <Heading as='h4' size='md' bgColor={"red"} style={{display:"inline-block",color:"white",marginTop:"30px"}}>
   RED : CURRENTLY OPEN
  </Heading>
  <br />
  <br />
  <Heading as='h4' size='md' bgColor={"blue"} style={{display:"inline-block",color:"white"}}>
   BLUE : PARTIALLY OPEN
  </Heading>
  <br />
  <br />
  <Heading as='h4' size='md' bgColor={"yellow"} style={{display:"inline-block",color:"black"}}>
   YELLOW : COMING SOON
  </Heading>
<img width={"90%"} src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/power-maps/5G/competitor-profiles-2020.gif" alt="" />


    </div>
  )
}

export default Maps