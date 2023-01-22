import React from 'react'
import {
    FormControl,
    FormLabel,
   
    Highlight,
    Heading,
    Input,
  } from '@chakra-ui/react'
  
import { useRef } from 'react'

import { useContext } from 'react';
import { AuthContext } from '../AuthContext/Data';
import Alertsfun from './Alerts';

  let arr=[]
function Addproduct() {
let countdata =  JSON.parse(localStorage.getItem("Alldata"))
const dref = useRef({})

 
  let Authobj = useContext(AuthContext)
  let {datafun} = Authobj
  const handlesubmit=(e)=>{
    e.preventDefault()
   
    let name= dref.current['name'].value
    let id= dref.current['id'].value
    let img= dref.current['img'].value
    let color= dref.current['color'].value
    let size= dref.current['size'].value
    let desc= dref.current['desc'].value
    let price= dref.current['price'].value
    
let obj={
  name,id,img,color,size,desc,price
}

// localStorage.setItem("",JSON.stringify(obj))
let newdata =  JSON.parse(localStorage.getItem("Alldata"))
arr =[...newdata,obj]

  localStorage.setItem("Alldata",JSON.stringify(arr))
  datafun()




  

}





  return  <form action="" onSubmit={handlesubmit} style={{marginTop:"20px"}}>
   <Heading textAlign={"center"} color={"white"} textDecoration={"Highlight"}  mt={"50px"}>
<Highlight
    query='ADD PRODUCT'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'black' ,color:"white" } }
  >
   ADD PRODUCT

  </Highlight>
   </Heading>
<FormControl onSubmit={handlesubmit} isRequired>
  <FormLabel>Name</FormLabel>
  <Input name="Name" placeholder='Enter Product Name' ref={e=>dref.current['name']=e} />
  <FormLabel>Id</FormLabel>
  <Input name="id" type={"number"} placeholder='Enter Id' ref={e=>dref.current['id']=e}  readOnly value={countdata.length+1}/>
  <FormLabel>Img Url</FormLabel>
  <Input name="img"  placeholder='Enter img url' ref={e=>dref.current['img']=e} />
  <FormLabel>Price</FormLabel>
  <Input name="price"  placeholder='Enter Price' ref={e=>dref.current['price']=e} />
  <FormLabel>Color</FormLabel>
  <Input name="color"  placeholder='Enter Color' ref={e=>dref.current['color']=e} />
  <FormLabel>Size</FormLabel>
  <Input name="size"type="number"  placeholder='Enter Size' ref={e=>dref.current['size']=e}  />
  <FormLabel>Description</FormLabel>
  <Input name="desc"  placeholder='Enter Description' ref={e=>dref.current['desc']=e}  />

<button style={{color:"white",backgroundColor:"black",padding:"15px",border:"none",width:"200px",margin:"auto",display:"block",marginTop:"15px"}} type="submit" onSubmit={handlesubmit}><Alertsfun /></button>
</FormControl>
</form>

}

export default Addproduct