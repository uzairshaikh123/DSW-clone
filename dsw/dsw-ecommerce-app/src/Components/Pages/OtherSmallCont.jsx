import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
let arr =[{
    id:1,
    name:"Your New Favorite Lug-Sole Boots",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-lug?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:2,
    name:"Dress-Up-or-Down Booties",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-booties?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:3,
    name:"Outfit-Elevating Platform Boots",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_w-platform?impolicy=qlt-medium&imwidth=1011&imdensity=1"
}
]
function OtherSmallCont() {
  return (
    <Box mt={"100px"}>
<Grid templateColumns='repeat(3, 1fr)' gap={10} mt={"50px"}>
    {arr.map((item)=>{
   
   return  <GridItem margin={"auto"} h='auto' key={item.id} >
    <Box>
<Image display="block" margin={"auto"}  width={"400px"} src={item.img} alt="" />
</Box>

<Text mt={"20px"} fontSize={"20px"} textAlign={"center"}>{item.name}</Text>


  </GridItem>
    })}
  
</Grid>


    </Box>
  )
}
export default OtherSmallCont
