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

import Modalfun from './Modal';
import {Link as RLink} from 'react-router-dom'
import PriceRanger from './Priceranger';
import Loading from '../Components/Pages/Loading';

import Pagination from './Pagination';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/Data';
import Priceranger from './Priceranger';
function Products() {
  const [state,setstate] = useState(true)
  const [arr,setarr] = useState([])
  useEffect(()=>{

      setTimeout(() => {
        setstate(false)
      }, 800);
      
      },[])
    // let arr = [
    //     {
    //         id: 1,
    //         name: "adidas",
    //         img:Adidas1,
    //         price: 109.99,
    //         desc: "Alphabounce 1 Running Shoe - Men's"
    //     },
    //     {
    //         id: 2,
    //         name: "Puma",
    //         price: 59.99,
    //         img: Puma,
    //         desc: "Ever FS Sneaker - Men's"
    //     },
    //     {
    //         id: 3,
    //         name: "adidas",
    //         price: 59.99,
    //         img: Adidas2,
    //         desc: "Grand Court 2.0 Sneaker - Men's"
    //     },
    //     {
    //         id: 4,
    //         name: "adidas",
    //         price: 79.99,
    //         img:Adidas3,
    //         desc: "Lite Racer Adapt 5.0 Sneaker - Men's"
    //     },
    //     {
    //         id: 5,
    //         name: "Crown Vintage",
    //         price: 79.99,
    //         img: crown,
    //         desc: "Edsul Sneaker"
    //     },
    //     {
    //         id: 6,
    //         name: "New Balance",
    //         price: 79.99,
    //         img: New_Balance,
    //         desc: "Kaptir 2.0 Sneaker - Men's"
    //     },
    //     {
    //         id: 7,
    //         name: "adidas",
    //         price: 109.99,
    //         img:Adidas4,
    //         desc: "Fresh Foam Roav Sneaker - Men's"
    //     },
    //     {
    //         id: 8,
    //         name: "Puma",
    //         price: 59.99,
    //         img: Puma2,
    //         desc: "Softride One4All Sneaker - Men's"
    //     },
    //     {
    //         id: 9,
    //         name: "Puma",
    //         price: 109.99,
    //         img: Puma3,
    //         desc: "Ever FS Sneaker"
    //     },
    //     {
    //         id: 10,
    //         name: "Crown Vintage",
    //         price: 79.99,
    //         img: crown2,
    //         desc: "Ebben Sneaker"
    //     },
    //     {
    //         id: 11,
    //         name: "Vans",
    //         price: 129.99,
    //         img: Vans5,
    //         desc: "Runfalcon 2.0 Running Shoe - Men's"
    //     },
    //     {
    //         id: 12,
    //         name: "adidas",
    //         price: 59.99,
    //         img:Adidas5,
    //         desc: "Asher Slip-On Sneaker - Men's"
    //     },
    //     {
    //         id: 13,
    //         name: "Puma",
    //         price: 109.99,
    //         img: Puma4,
    //         desc: "Ward Sneaker - Men's"
    //     },
    //     {
    //         id: 14,
    //         name: "Vans",
    //         price: 79.99,
    //         img: Vans7,
    //         desc: "Lite Racer BYD 2.0 Sneaker - Mens"
    //     },
    //     {
    //         id: 15,
    //         name: "Reebok",
    //         price: 59.99,
    //         img:Reebok2,
    //         desc: "Hoops 3.0 Mid High-Top Sneaker - Men's"
    //     },
    //     {
    //         id: 16,
    //         name: "Vans",
    //         price: 129.99,
    //         img: Vans8,
    //         desc: "237 Sneaker - Men's"
    //     },
    //     {
    //         id: 17,
    //         name: "ASICS",
    //         price: 109.99,
    //         img: ASICS,
    //         desc: "Fresh Foam 680 v7 Running Shoe - Men's"
    //     },
    //     {
    //         id: 18,
    //         name: "ASICS",
    //         price: 59.99,
    //         img:ASICS2,
    //         desc: "Run '70s Running Shoe - Men's"
    //     },
    //     {
    //         id: 19,
    //         name: "Vans",
    //         price: 129.99,
    //         img: Vans5,
    //         desc: "GEL-Venture 8 Running Shoe - Men's"
    //     },
    //     {
    //         id: 20,
    //         name: "ASICS",
    //         price: 109.99,
    //         img: ASICS3,
    //         desc: "515 Sneaker - Men's"
    //     },
    //     {
    //         id: 21,
    //         name: "Reebok",
    //         price: 79.99,
    //         img: Reebok4,
    //         desc: "Kaptir 2.0 Running Shoe - Men's"
    //     },
    //     {
    //         id: 22,
    //         name: "Vans",
    //         price: 79.99,
    //         img: Vans7,
    //         desc: "840 v5 Running Shoe - Men's"
    //     },
    //     {
    //         id: 23,
    //         name: "Brooks",
    //         price: 129.99,
    //         img: Brooks3,
    //         desc: "GT-1000 11 Running Shoe - Men's"
    //     },
    //     {
    //         id: 24,
    //         name: "Reebok",
    //         price: 79.99,
    //         img:Reebok5,
    //         desc: "Rebound Rugged Sneaker - Men's"
    //     },
    //     {
    //         id: 25,
    //         name: "Reebok",
    //         price: 129.99,
    //         img: Reebok3,
    //         desc: "Range High-Top Sneaker - Men's"
    //     }, {
    //         id: 26,
    //         name: "ASICS",
    //         price: 59.99,
    //         img: ASICS2,
    //         desc: "Pacer Future Street Plus Running Shoe - Men's"
    //     },
    //     {
    //         id: 27,
    //         name: "Brooks",
    //         price: 109.99,
    //         img: Brooks2,
    //         desc: "Fresh Foam 680 v7 Running Shoe - Men's"
    //     },
    //     {
    //         id: 28,
    //         name: "Skechers",
    //         price: 79.99,
    //         img: New_Balance3,
    //         desc: "Fresh Foam Roav Running Shoe - Men's"
    //     },
    //     {
    //         id: 29,
    //         name: "Skechers",
    //         price: 79.99,
    //         img: Skechers,
    //         desc: "Daily 3.0 Sneaker - Men's"
    //     },
    //     {
    //         id: 30,
    //         name: "Skechers",
    //         price: 109.99,
    //         img: Skechers2,
    //         desc: "Atwood Deluxe Sneaker - Men's"
    //     },
    //     {
    //         id:31,
    //         name:"Puma",
    //         price:100.99,
    //         img:Puma3,
    //         desc: "Atwood Deluxe Sneaker - Men's"

    //     },
    //     {
    //         id:32,
    //         name:"Skechers",
    //         price:100.99,
    //         img:Skechers5,
    //         desc: "Atwood Deluxe Sneaker - Men's"

    //     }
    // ]

const Authobj = useContext(AuthContext)

const [data,setdata] = useState([])
let butt = Array(31).fill(0).map((e,i)=>i+1)
let data2 = Authobj.data
// console.log(butt)
    useEffect(() => {
     setdata([...Authobj.data])

     
    }, [])
    
    useEffect(()=>{
      setdata([...Authobj.data])

    },[])
    console.log(arr,Authobj.data)
const handlesort=(val)=>{
let ndata = Authobj.data
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


const handleclick=(e)=>{

 let val=e.target.innerText
 let ndata = Authobj.data
 ndata=ndata.filter((item)=>{
  return item.size==val
 })
setdata([...ndata])
}

const handleall=()=>{
  setdata([...Authobj.data])
}

const handlecolor=(e)=>{

  let val=e.target.name
  let ndata
  if(e.target.checked){
    ndata = Authobj.data
    ndata=ndata.filter((item)=>{
     return item.color==val
    })
  }else{
    ndata = Authobj.data
  }

  // console.log(ndata)
  setdata([...ndata])
 }
 const handlename=(e)=>{

  let val=e.target.name
  let ndata
  if(e.target.checked){
    ndata = Authobj.data
    ndata=ndata.filter((item)=>{
     return item.name==val
    })
  }else{
    ndata = Authobj.data
  }

  // console.log(ndata)
  setdata([...ndata])
 }
// console.log(data)
    return (state?<Loading/> :
    <>
     <div>
   

        <Heading textAlign={'center'
        }>
            DESIGNER SHOES 
            <hr />
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
{butt.map((item,i)=>{
    return <Button key={i} mt={"10px"} variant='outline' mr={"5px"} onClick={handleclick}> {data2[i].size} </Button>
})}
     <Button onClick={handleall}>View All</Button>
    
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
    <Checkbox name="adidas" colorScheme='gray'lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)} >
    Addidas
  </Checkbox>
  <br />
  <Checkbox name="Reebok" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
   Reebock
  </Checkbox>
  <br />
  <Checkbox name="New Balance" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
    New Balance
  </Checkbox>
  <br />
  <Checkbox name="Crown Vintage" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
  Crown Vintage
  </Checkbox>
  <br />
  <Checkbox name="Puma" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
    Puma
  </Checkbox>
  <br />
  <Checkbox name="Vans" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
    Vans
  </Checkbox>
  <br />
  <Checkbox name="ASICS" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
  ASICS
  </Checkbox>
  <br />
  <Checkbox name="Skechers" colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlename(e)}>
  Skechers
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
    <Checkbox name='black' colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlecolor(e)}>
    Black
  </Checkbox>
  <br />
  <Checkbox name='white' colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlecolor(e)}>
 White
  </Checkbox>
  <br />
  <Checkbox name='yellow' colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlecolor(e)}>
  Yellow
  </Checkbox>
  <br />
  <Checkbox name='blue' colorScheme='gray' lineHeight={"15px"} fontSize={"20px"} onChange={(e)=>handlecolor(e)}>
Blue
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
     <Priceranger />
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
                    {data.map((item,i) => {
                        return <GridItem w='100%' key={item.id} className="prod">
                            <RLink to={`/products/${item.id}`} >

                            
                            <img src={item.img} alt="" />
                            <Heading fontSize={"20px"}>{item.name}</Heading>
                            <p>{item.desc}</p>
                            <p>{"$"}{item.price}</p>
                            <p>Size : {item.size}</p>
                      <img width={"90px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauOGLtNzVAWhLL34f14v15aXnVwFTVJM-qw&usqp=CAU" alt="" />
                      </RLink>
                            <button className='add' variant='outline'><Modalfun key={item.id} id={item.id} name={item.name} img={item.img} desc={item.desc} price={item.price}/></button>
                            
                        </GridItem>

                    })}
                </Grid>
            </div>


       </div>
       
  
   
    </div>
    
    </>
    )
}

export default Products