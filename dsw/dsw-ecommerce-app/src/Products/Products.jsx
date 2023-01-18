import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Box, Button, Checkbox, Grid, GridItem, Heading, Modal, Text } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'
import Modalfun from './Modal';
import {Link as RLink} from 'react-router-dom'
function Products() {
    let arr = [
        {
            id: 1,
            name: "adidas",
            img: "https://images.dsw.com/is/image/DSWShoes/530395_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            price: 109.99,
            desc: "Alphabounce 1 Running Shoe - Men's"
        },
        {
            id: 2,
            name: "Puma",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530447_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ever FS Sneaker - Men's"
        },
        {
            id: 3,
            name: "adidas",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530396_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Grand Court 2.0 Sneaker - Men's"
        },
        {
            id: 4,
            name: "adidas",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530530_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Lite Racer Adapt 5.0 Sneaker - Men's"
        },
        {
            id: 5,
            name: "Crown Vintage",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/523902_240_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Edsul Sneaker"
        },
        {
            id: 6,
            name: "New Balance",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/501697_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Kaptir 2.0 Sneaker - Men's"
        },
        {
            id: 7,
            name: "adidas",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/505491_030_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam Roav Sneaker - Men's"
        },
        {
            id: 8,
            name: "Puma",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/531546_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Softride One4All Sneaker - Men's"
        },
        {
            id: 9,
            name: "Puma",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/520072_100_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ever FS Sneaker"
        },
        {
            id: 10,
            name: "Crown Vintage",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/528805_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ebben Sneaker"
        },
        {
            id: 11,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/515160_400_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Runfalcon 2.0 Running Shoe - Men's"
        },
        {
            id: 12,
            name: "adidas",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/293308_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Asher Slip-On Sneaker - Men's"
        },
        {
            id: 13,
            name: "adidas",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/508630_026_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Ward Sneaker - Men's"
        },
        {
            id: 14,
            name: "adidas",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/524235_410_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Lite Racer BYD 2.0 Sneaker - Mens"
        },
        {
            id: 15,
            name: "Reebok",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530825_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Hoops 3.0 Mid High-Top Sneaker - Men's"
        },
        {
            id: 16,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/533207_102_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "237 Sneaker - Men's"
        },
        {
            id: 17,
            name: "ASICS",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/508055_037_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam 680 v7 Running Shoe - Men's"
        },
        {
            id: 18,
            name: "ASICS",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/530441_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Run '70s Running Shoe - Men's"
        },
        {
            id: 19,
            name: "Vans",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/512327_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "GEL-Venture 8 Running Shoe - Men's"
        },
        {
            id: 20,
            name: "ASICS",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/531790_060_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "515 Sneaker - Men's"
        },
        {
            id: 21,
            name: "Reebok",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/523614_061_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Kaptir 2.0 Running Shoe - Men's"
        },
        {
            id: 22,
            name: "Vans",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/474330_048_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "840 v5 Running Shoe - Men's"
        },
        {
            id: 23,
            name: "Brooks",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/520084_300_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "GT-1000 11 Running Shoe - Men's"
        },
        {
            id: 24,
            name: "Reebok",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/448007_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Rebound Rugged Sneaker - Men's"
        },
        {
            id: 25,
            name: "Reebok",
            price: 129.99,
            img: "https://images.dsw.com/is/image/DSWShoes/449960_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Range High-Top Sneaker - Men's"
        }, {
            id: 26,
            name: "ASICS",
            price: 59.99,
            img: "https://images.dsw.com/is/image/DSWShoes/518607_001_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Pacer Future Street Plus Running Shoe - Men's"
        },
        {
            id: 27,
            name: "Brooks",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/516732_000_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam 680 v7 Running Shoe - Men's"
        },
        {
            id: 28,
            name: "Skechers",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/506302_774_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Fresh Foam Roav Running Shoe - Men's"
        },
        {
            id: 29,
            name: "Skechers",
            price: 79.99,
            img: "https://images.dsw.com/is/image/DSWShoes/544445_600_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Daily 3.0 Sneaker - Men's"
        },
        {
            id: 30,
            name: "Brooks",
            price: 109.99,
            img: "https://images.dsw.com/is/image/DSWShoes/505853_241_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"
        },
        {
            id:31,
            name:"",
            price:100.99,
            img:"https://images.dsw.com/is/image/DSWShoes/534700_360_ss_01?impolicy=qlt-medium&imwidth=800&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"

        },
        {
            id:32,
            name:"",
            price:100.99,
            img:"https://images.dsw.com/is/image/DSWShoes/531252_701_ss_01?impolicy=qlt-medium&imwidth=800&imdensity=1",
            desc: "Atwood Deluxe Sneaker - Men's"

        }
    ]
const [data,setdata] = useState([])
let butt = Array(31).fill(0).map((e,i)=>i+1)
let min=10
let max=100
// console.log(butt)
    useEffect(() => {
     setdata([...arr])


    }, [])


const handlesort=(val)=>{
let ndata = data
    if(val=="asc"){
       ndata.sort((a,b)=>{
            return a.price-b.price
        })
        setdata([...ndata])
    }else if(val=="desc"){
      ndata.sort((a,b)=>{
            return b.price-a.price
        })
        setdata([...ndata])
    }
    
   
    
  

}
console.log(arr)
    return (<div>
   

        <Heading textAlign={'center'
        }>
            Products Page
        </Heading>
        <div className='cont-product'>

            <div className='productdiv'>

<Heading>FILTERS</Heading>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
{butt.map((item)=>{
    return <Button mt={"10px"} variant='outline' mr={"5px"}> {item}</Button>
})}
     
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          BRAND
        </Box>
        <AccordionIcon />
      </AccordionButton>
      
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray'lineHeight={"15px"} fontSize={"20px"}>
    Addidas
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
   Reebock
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    New Balance
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Crown Vintage
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Puma
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Vans
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  ASICS
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Skechers
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  ASICS
  </Checkbox>


  

     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          COLOR
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Black
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
 White
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Yellow
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Brown
  </Checkbox>
  <Button mt={"30px"}>View All</Button>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          WIDTH
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
 Medium(107)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Large(37)
  </Checkbox>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          PRODUCT TYPE

        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Athletic (52)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Clogs (1)

  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Sandals (27)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Sneakers (89)
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          STYLE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Basketball (9)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
 
Court (10)

  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Cross Training (3)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  
High Top (8)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray'lineHeight={"15px"} fontSize={"20px"}>
    Hiking (1)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>

  Running (39)


  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Skate (2)
  </Checkbox>
  <br />
  <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
  Slip-On (8)
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         OCCASION
           </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>

    Athleisure (14)


</Checkbox>
<br />
<Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Fashion & Street (23)
</Checkbox>
<br />
<Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Gifts (43)
</Checkbox>
<br />
<Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Outdoor (5)
</Checkbox>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          FEATURE
        </Box>
       <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
    Basic Running (25)
</Checkbox>
<br />
<Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Road Running (21)
</Checkbox>
<br />
<Checkbox colorScheme='gray' lineHeight={"15px"} fontSize={"20px"}>
Trail (5)
</Checkbox>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          PRICE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RangeSlider aria-label={[min, max]} defaultValue={[min, max]}>
  <RangeSliderTrack bg='red.100'>
    <RangeSliderFilledTrack bg='tomato' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={6} index={0}>
    <Box color='red'  />
  </RangeSliderThumb>
  <RangeSliderThumb boxSize={6} index={1}>
    <Box color='red' />
  </RangeSliderThumb>
</RangeSlider>
        
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
    <Heading>SORT</Heading>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        SORT
        </Box>
       <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
<button className='add' onClick={()=>handlesort("asc")}>Sort Price Low To High</button>
    <button className='add' onClick={()=>handlesort("desc")}>Sort Price High To Low</button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>






            </div>
            <div className='productdiv2'>
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    {data.map((item) => {
                        return <GridItem w='100%' key={item.id} className="prod">
                            <RLink to={`/products/${item.id}`} >

                            
                            <img src={item.img} alt="" />
                            <Heading fontSize={"20px"}>{item.name}</Heading>
                            <p>{item.desc}</p>
                            <p>{"$"}{item.price}</p>
                      <img width={"90px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauOGLtNzVAWhLL34f14v15aXnVwFTVJM-qw&usqp=CAU" alt="" />
                      </RLink>
                            <button className='add' variant='outline'><Modalfun name={item.name} img={item.img} desc={item.desc} price={item.price}/></button>
                            
                        </GridItem>

                    })}
                </Grid>
            </div>


       </div>
       
  
   
    </div>
    )
}

export default Products