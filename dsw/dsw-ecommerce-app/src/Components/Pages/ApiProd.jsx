import React, { useEffect } from 'react'
import  { Box,Button,Heading, Text } from "@chakra-ui/react"
import { useState } from 'react';
import axios from 'axios'
import { Grid, GridItem } from '@chakra-ui/react'
import {Link as RLink} from 'react-router-dom'
import Modalfun from '../../Products/Modal';
function ApiProd() {
  let arr = [
    {
      id: 1,
      name: "Merrell",
      price:"$114",
      desc:"Mer Speed Strike Mid Hiking Boot - Men's",
      img: "https://images.dsw.com/is/image/DSWShoes/508942_310_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
     
    },{
      id: 2,
      name: "Reebok",
      price:"$69.98 -$99.90 ",
      desc:"Freestyle Hi High-Top Sneaker - Women's",
      img: "https://images.dsw.com/is/image/DSWShoes/513612_000_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 3,
      name: "adidas",
      price:"$54 - $64.99",
      desc:"Puremotion Sneaker - Women's",
      img: "https://images.dsw.com/is/image/DSWShoes/519224_417_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 4,
      name: "Basic 6-Inch Boot - Men's",
      price:"$54.98 - $64.99",
      desc:"Basic 6-Inch Boot - Men's",
      img: "https://images.dsw.com/is/image/DSWShoes/308527_231_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 5,
      name: "UGG",
      price:"$179.99",
      desc:"Kristin Wedge Bootie",
      img: "https://images.dsw.com/is/image/DSWShoes/509943_210_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 6,
      name: "Dr. Martens",
      desc:"Molly Platform Bootie",
      price:"$149.99",
      img: "https://images.dsw.com/is/image/DSWShoes/247425_002_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 7,
      name: "Converse",
      price:"$104.99 - $169.99",
      desc:"Molly Platform Bootie",
      img: "https://images.dsw.com/is/image/DSWShoes/514237_102_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 8,
      name: "Dr. Martens",
      price:"$74.99",
      desc:"Molly Platform Bootie",
      img: "https://images.dsw.com/is/image/DSWShoes/464552_001_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 9,
      name: "SOREL",
      price:"$169.99",
      desc:"Molly Platform Bootie",
      img: "https://images.dsw.com/is/image/DSWShoes/532178_242_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    },{
      id: 10,
      name: "UGG",
      price:"$139.99 - $169.99",
      desc:"Molly Platform Bootie",
      img: "https://images.dsw.com/is/image/DSWShoes/509945_210_ss_01?impolicy=colpg&imwidth=308&imdensity=1"
    }

  ]
  
  return <Box width={"90%"} margin={"auto"} mt={"80px"} >
    <Heading  textAlign={"center"}>Our Picks For You</Heading>
 <Grid templateColumns='repeat(4, 1fr)' gap={10}>
  {arr.map((item)=>{
     return  <GridItem w='100%' key={item.id}>
 <RLink to="/products" >
<img src={item.img} alt="" />
<Text>{item.name}</Text>
<Text>Price: {item.price}</Text>
<img width={"90px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauOGLtNzVAWhLL34f14v15aXnVwFTVJM-qw&usqp=CAU" alt="" />
 </RLink> 
 <button className='add' variant='outline'><Modalfun name={item.name} img={item.img} desc={item.desc} price={item.price}/></button>

     
 </GridItem>
  })}
  
    
  </Grid>
  <Heading mt={"50px"} textAlign={"center"}>DSW DESIGNER SHOE WAREHOUSE: THE LATEST IN DESIGNER SHOES, </Heading>
  <Heading textAlign={"center"}>SANDALS, HANDBAGS AND MORE</Heading>

  </Box>
}

export default ApiProd