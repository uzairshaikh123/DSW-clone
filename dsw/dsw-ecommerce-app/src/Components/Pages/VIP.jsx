import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
let arr =[{
    id:1,
    name:"Get On the List",
    desc:"Sign up for emails for the latest VIP perks and exclusives",
    img:"https://images.dsw.com/is/image/DSWShoes/P221696_editorial_email.jpg?impolicy=qlt-medium&imwidth=1011&imdensity=1"
   
},
{
    id:2,
    desc:"Make your first purchase as a VIP to get this exclusive offer. Exclusions apply.",

    name:"20% Off After Your First VIP Purchase",
    img:"https://images.dsw.com/is/image/DSWShoes/vip-icon-money-1396-1014.svg?impolicy=qlt-medium&imwidth=1011&imdensity=1",
},
{
    id:3,
    name:"Free Shipping",
    desc:"On anything. All the time. (+ Free in-store returns.)",

img:"https://images.dsw.com/is/image/DSWShoes/vip-icon-delivery-1396-1014.svg?impolicy=qlt-medium&imwidth=1011&imdensity=1"

},
{
    id:4,
    name:"$5 Off For Your Bday",
    desc:"Make sure you've added the big day in your profile so we can celebrate",

    img:"https://images.dsw.com/is/image/DSWShoes/vip-icon-gift-1396-1014.svg?impolicy=qlt-medium&imwidth=1011&imdensity=1"
},
{
    id:5,
    name:"Points With Every Purchase",
    desc:"More points = more Rewards. And more Rewards = more shoes.",

    img:"https://images.dsw.com/is/image/DSWShoes/vip-icon-money-1396-1014.svg?impolicy=qlt-medium&imwidth=1011&imdensity=1"
}
]
function VIP() {
  return (
    <Box mt={"100px"}>
        <Heading textAlign={"center"}>
        Become A VIP. Get Free (& Easy) Perks.
        </Heading>
<Grid templateColumns='repeat(3, 1fr)'  gap={10} mt={"50px"}>
    {arr.map((item)=>{
   
   return  <GridItem margin={"auto"} h='auto' key={item.id} >
    <Box>
<Image display="block" margin={"auto"}  width={"400px"} src={item.img} alt="" />
</Box>

<Text mt={"20px"} fontSize={"20px"} textAlign={"center"}>{item.name}</Text>
<Text>{item.title}</Text>
<Text textAlign={"center"}>More Details</Text>


  </GridItem>
    })}
  
</Grid>


    </Box>
  )
}
export default VIP
