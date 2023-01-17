import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
let arr =[{
    id:1,
    name:"Take-On-The-Cold Winter Boots",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-cold?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:2,
    name:"Easy Court Sneakers",
img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-court?impolicy=qlt-medium&imwidth=1011&imdensity=1"},
{
    id:3,
    name:"Classic Boots",
img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-boots?impolicy=qlt-medium&imwidth=1011&imdensity=1"

},{
    id:4,
    name:"Cool Retro Sneakers",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-retro?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:5,
    name:"Winter-White Sneakers",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-white?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:6,
    name:"Top Sneakers Under $75",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-75?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:7,
    name:"Event-Worthy Dress Shoes",
    img:"https://images.dsw.com/is/image/DSWShoes/P222120_editorial_m-dress?impolicy=qlt-medium&imwidth=1011&imdensity=1"
}
]
function OtherMidCont() {
  return (
    <Box mt={"100px"}>
        <Heading textAlign={"center"}>
        The Must-Haves for Men This Year
        </Heading>
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
export default OtherMidCont
