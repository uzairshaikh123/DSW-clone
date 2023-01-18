import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../img/logo.png'


function SmallCont() {
  return <Box width={"50%"} margin="auto"  mt={"30px"}  border={"2px solid gray"}>
<Flex justify={"space-between"} >
<Box>
    <Flex justify={"space-between"}>
    <Box>
        <Image width={"100px"} src={logo} fallbackSrc='https://via.placeholder.com/150' />
    </Box>
    <Box>

 <Text fontSize={"20px"}><b> BECOME A VIP & GET 20% OFF</b> </Text>
<Text>Plus,5% back in Rewards & free shipping</Text>
    </Box>
    </Flex>

 </Box>

<Box border={"1px solid gray"}>
    <Flex justify={"space-between"}>
    <Box>
        <Image width={"100px"} src={logo} fallbackSrc='https://via.placeholder.com/150' />
    </Box>
    <Box>

 <Text fontSize={"20px"}><b> BECOME A VIP & GET 20% OFF</b> </Text>
<Text>Plus,5% back in Rewards & free shipping</Text>
    </Box>
    </Flex>

 </Box>
</Flex>


  </Box>
}

export default SmallCont