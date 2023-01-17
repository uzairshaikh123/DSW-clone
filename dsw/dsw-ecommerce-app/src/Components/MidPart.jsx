import React from 'react'
import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
export default function MidPart() {
let arr =[{
    id:1,
    name:"Snow & Winter Boots",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/509700_224_ss_01.jpg?impolicy=qlt-medium&imwidth=300&imdensity=1"
},
{
    id:2,
    name:"Fashion Sneakers",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/529502_100_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:3,
    name:"Casual Boots & Booties",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/515485_210_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:4,
    name:"All Boots",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/532019_260_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:5,
    name:"Loafers",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/515687_022_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:6,
    name:"Atheletic & Running",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/500167_042_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:7,
    name:"Tall & Riding Boots",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/533288_202_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:8,
    name:"Flats",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/512439_319_ss_01?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:9,
    name:"Heels",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/505578_740_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:10,
    name:"Clearance",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_clearance?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:11,
    name:"Mens Shoes",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/533186_060_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
},
{
    id:12,
    name:"Kids Shoes",
    Category:"Womens",
    image:"https://images.dsw.com/is/image/DSWShoes/533665_710_ss_01.jpg?impolicy=qlt-medium&imwidth=100&imdensity=1"
}
]



//

  return ( <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={"50px"}>
    {arr.map((item)=>{
       return  <GridItem w='90%' margin={"auto"} h='auto'  key={item.id} boxShadow = {"rgba(0, 0, 0, 0.35) 0px 5px 15px" } >
<Image display="block" margin={"auto"}  width={"150px"} src={item.image} alt="" />
<Text textAlign={"center"}>{item.Category}</Text>
<Text textAlign={"center"}>{item.name}</Text>


  </GridItem>
    })}
  
</Grid>

  )
}
