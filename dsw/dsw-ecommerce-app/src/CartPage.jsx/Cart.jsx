import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Address from './Address'
import Loading from '../Components/Pages/Loading';
import Progressfun from '../Components/Pages/Progress';

function Cart() {
  const [state,setstate] = useState(true)

    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);
        
        },[])
    let arr=[
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
        }
    ]
  return state?<Loading />
  :
    <>
<Heading textAlign={'center'}>Cart Page</Heading>
<Heading ml={3}>Total Cost : $309 USD</Heading>
    <div className='cart'>

<div className='left' style={{border:"0.5px solid gray",width:"50%"}}>
{arr.map((item)=>{
   return  <>
    <div className='parent-div' style={{display:"flex",width:"95%",margin:"auto",textAlign:"left",padding:"25px",color:"black",justifyContent:"space-between"}}>


    
   
 
    <div className='left-cont'>
    <img width={"160px"} src={item.img} alt="" />

<Heading as='h4' size='md'>{item.name}</Heading>
<span>{item.desc}</span>





</div>

<div id='left-div-rigth-cont' style={{marginTop:"50px"}}>
    <div>
    <Heading as='h4' size='md'>Price : {"$"}{item.price} {" USD"}</Heading>
    <Heading as='h4' size='md'>Quantity : 7</Heading>
    </div>
 
 

    </div>
    </div>
    <hr />
    </>
})}



</div>
<div className='rightcont' style={{width:"48%",textAlign:"left",padding:"25px",backgroundColor:"white",color:"black"}}>
    
   ADDRESS DETAILS
<hr />
{<Address />}

</div>
    </div>
    </>
  
}

export default Cart