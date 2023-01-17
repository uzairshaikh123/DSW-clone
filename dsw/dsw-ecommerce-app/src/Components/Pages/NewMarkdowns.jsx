import { Box, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function NewMarkdowns() {

    let arr =[

        {
            id:1,
            name:"Clearance",
            img:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_w-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"},
    {
        id:2,
       name:"Clearance",
       img:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_m-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"
    },
    {
        id:3,
        name:"Clearance",
        img:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_k-clearance?impolicy=qlt-medium&imwidth=300&imdensity=1"

    },
    {
        id:4,
        name:"Under $75",
        img:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_under75?impolicy=qlt-medium&imwidth=300&imdensity=1"

    },
    {
        id:5,
        name:"Boots Under $70",
        img:"https://images.dsw.com/is/image/DSWShoes/P221473_funnel_under70?impolicy=qlt-medium&imwidth=300&imdensity=1"

    },
    {
        id:6,
        name:"All Deals",
        img:"https://images.dsw.com/is/image/DSWShoes/P221583_funnel_alldeals?impolicy=qlt-medium&imwidth=300&imdensity=1"

    }
    ]


  return    <Box mt={"150px"}  width="80%" display={"Flex"} justifyContent={"space-between"} margin="auto" alignItems={"center"}>

<Box  width={"20%"} mr={"100px"}>
<Heading as='h3' size='lg'>
New Markdowns, Right This Way
  </Heading>

    
</Box>
<Spacer />
<Box  width={"80%"}>

<Grid templateColumns='repeat(3, 1fr)' gap={6}>
  {arr.map((item)=>{
  
  return <GridItem w='100%' h='auto' key={item.id}>
<Image width={"200px"} src={item.img} />

<Text>Womens</Text>
<Text>{item.name}</Text>

  </GridItem>
  })}
  
</Grid>

</Box>

    </Box>
  
}

export default NewMarkdowns