import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { DrawerFooter, FormLabel, Heading, Highlight, Input } from '@chakra-ui/react'

import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { AuthContext } from '../AuthContext/Data'

function Delproduct() {
let Authobj = useContext(AuthContext)
let data = JSON.parse(localStorage.getItem("Alldata"))
const dref = useRef({})
let {datafun} =Authobj

const handledelete=()=>{
  let id =dref.current['id'].value
  let name = dref.current['name'].value
  let img = dref.current['img'].value
  let color = dref.current['color'].value
  let size = dref.current['size'].value
  let price = dref.current['price'].value
  let desc = dref.current['desc'].value
  if(id){
 let newdata = data.map((item)=>{
    if(item.id==id){
      if(name){

        item.name=name
      }
      if(img){
        item.img=img
      }
      if(color){
        item.color=color
      }
      if(price){
        item.price=price
      }
      if(desc){
        item.desc=desc
      }
      if(size){
        item.size=size
      }
    }
    
  return item
  
})
localStorage.setItem("Alldata",JSON.stringify(newdata))
datafun()
}else{
  alert("Invalid request Please Give the id")
}
 

}


  return (
    <div>
     
<Heading textAlign={"center"} color={"white"} textDecoration={"Highlight"}  mt={"50px"}>
<Highlight
    query='UPDATE PRODUCT'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'black' ,color:"white" } }
   
  >
   UPDATE PRODUCT

  </Highlight>
   </Heading>

  <FormLabel>Product Id</FormLabel>
<Input placeholder={"Enter the Id of Product"} ref={e=>dref.current['id']=e}></Input>
  <FormLabel>Product Name</FormLabel>
<Input placeholder={"Enter the Name of Product"}  ref={e=>dref.current['name']=e}></Input>
  <FormLabel>Product Imgurl</FormLabel>
<Input placeholder={"Enter the Imageurl of Product"}  ref={e=>dref.current['img']=e}></Input>
  <FormLabel>Product Color</FormLabel>
<Input placeholder={"Enter the Color of Product"}  ref={e=>dref.current['color']=e}></Input>
  <FormLabel>Product Size</FormLabel>
<Input placeholder={"Enter the Size of Product"}  ref={e=>dref.current['size']=e}></Input>
  <FormLabel>Product Price</FormLabel>
<Input placeholder={"Enter the Price of Product"}  ref={e=>dref.current['price']=e}></Input>
  <FormLabel>Product Description</FormLabel>
<Input placeholder={"Enter the Description of Product"}  ref={e=>dref.current['desc']=e}></Input>
<button style={{color:"white",backgroundColor:"red",width:"200px",display:"block",margin:"auto",marginTop:"30px",height:"40px",padding:"10px"}} onClick={()=>handledelete()}>UPDATE <EditIcon /></button>

    </div>
  )
}

export default Delproduct