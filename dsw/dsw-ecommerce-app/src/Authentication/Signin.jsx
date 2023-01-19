import { Heading, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import Footer from '../Components/Pages/Footer'
import Loading from '../Components/Pages/Loading'
import Formfun from './Form'

function Signin() {
  const [state,setstate] = useState(true)

    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);
        
        },[])
  return (
    state?<Loading />
    :<>
 
    <div className='cont'>
        <img width={"100%"} src="https://images.dsw.com/is/image/DSWShoes/sign_in_bg?impolicy=qlt-medium-high&imwidth=1400&imdensity=1" alt="" />
<div className='centered2'>

<Heading textAlign={"start"}  as='h2' size='lg'>
    NOT A VIP MEMBER YET?
  </Heading>
  <Heading textAlign={"start"}  as='h2' size='lg' paddingRight={"10px"}  marginRight={"10px"}>
  ALREADY SIGNED UP AT A STORE?
  </Heading>
  <p>Become a VIP, and get 20% off, plus free shipping on anything, 5% back in Rewards, and so</p>
  <Text ml={"10px"} textAlign={"start"}>much more.</Text>
 <button className='join' variant='outline'>Join For Free</button>


</div>
<div className='centered3'>
<Heading as='h3' size='lg' color={"black"} textAlign={"start"} padding="40px">
   SIGN IN
  </Heading>
{<Formfun />}
</div>


    </div>
    {<Footer />}
    </>
  )
}

export default Signin