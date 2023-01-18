import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'



function BigPhotoCont({img}) {
  return  <div className='cont'>
    <img width={"100%"} src={img} alt="" />
    <div className="centered">

<Heading mt={"40px"} as='h2' size='2xl'>
On-Trend Sneakers Under $75
  </Heading>
<Heading mt={"50px"} as='h4' size='md'>Your kind of boots at your kind of prices.</Heading>
<Flex justifyContent={"space-around"}>
<Button colorScheme={"red"}>Mens</Button>
<Button colorScheme={"red"}>Womens</Button>
</Flex>


    </div>
    </div>
   
}

export default BigPhotoCont