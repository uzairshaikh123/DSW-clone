import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Address from './Address'
import Loading from '../Components/Pages/Loading';
import Progressfun from '../Components/Pages/Progress';
import { DeleteIcon } from '@chakra-ui/icons';


function Cart() {
  const [state,setstate] = useState(true)
  const [totalcost,settotalcost] = useState(0)
  const [data,setdata] = useState([])
  let arr = JSON.parse(sessionStorage.getItem("cartarr"))||[]


    useEffect(()=>{

        setTimeout(() => {
          setstate(false)
        }, 1000);

let total =arr?.reduce((acc,item)=>{

acc= acc+item.price*item.quantity
return acc
},0)
console.log(total)
setdata([...arr])
settotalcost(total)
sessionStorage.setItem("total",JSON.stringify(total))

   },[totalcost])

const handledelete=(id)=>{
  
let newdata = arr.filter((item)=>{
  return item.id!==id
})
 
sessionStorage.setItem("cartarr",JSON.stringify(newdata))
setdata([...newdata])
let ndata = JSON.parse(sessionStorage.getItem("cartarr"))
let total = ndata.reduce((acc,item)=>{

    acc = acc+item.price
    return acc
    },0)
settotalcost(total)
sessionStorage.setItem("total",JSON.stringify(total))


}





  return state?<Loading />
  :
    arr.length==0?<Heading textAlign={"center"} mt={"30px"} color={"red"}>Cart Is Empty</Heading>:<>
<Heading textAlign={'center'}>Cart</Heading>
<hr />
<Heading ml={3}>Total Cost : ${totalcost} USD</Heading>
    <div className='cart'>

<div className='left' style={{border:"0.5px solid gray",width:"50%"}}>
{data.map((item)=>{
   return  <>
    <div className='parent-div' style={{display:"flex",width:"95%",margin:"auto",textAlign:"left",padding:"25px",color:"black",justifyContent:"space-between"}}>


    
   
 
    <div className='left-cont'>
    <img width={"160px"} src={item.img} alt="" />

<Heading as='h4' size='md'>{item.name}</Heading>
<span>{item.desc}</span>





</div>

<div id='left-div-rigth-cont' style={{marginTop:"50px"}}>
    <div style={{lineHeight: '30px'}}>
    <Heading as='h4' size='md'  style={{lineHeight: '40px'}}>Price : {"$"}{item.price} {" USD"}</Heading>
    <Heading as='h4' size='md'  style={{lineHeight: '40px'}}>Quantity : {item.quantity}</Heading>
    <Heading color={"red"} size={"md"} style={{cursor:"pointer",lineHeight: '40px'}} onClick={()=>handledelete(item.id)}>Remove<DeleteIcon /></Heading>
   
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