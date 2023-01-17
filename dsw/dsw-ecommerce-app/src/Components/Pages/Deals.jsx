import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
let arr =[
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-1?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-5?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-6?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-7-NEW.jpg?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-2?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-3?impolicy=qlt-medium&imwidth=1011&imdensity=1",
    "https://images.dsw.com/is/image/DSWShoes/P222162_editorial_boot-4?impolicy=qlt-medium&imwidth=1011&imdensity=1"
]
function Deals() {
  return (
    <Box mt={"100px"}>
 <Heading as='h3' size='lg' textAlign={"center"}>
   The Deals To Know 
  </Heading>
<Grid templateColumns='repeat(3, 1fr)' gap={10} mt={"50px"}>
    {arr.map((item,i)=>{
   
   return  <GridItem margin={"auto"} h='auto' key={i+1} >
    <Box>
<Image display="block" margin={"auto"}  width={"400px"} src={item} alt="" />
</Box>
<Text mt={"20px"}  textAlign={"center"}>Show More</Text>



  </GridItem>
    })}
  
</Grid>


    </Box>
  )
}

export default Deals