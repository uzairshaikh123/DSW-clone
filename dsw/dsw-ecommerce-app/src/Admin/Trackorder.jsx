import { Heading, Highlight, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
  
    Tr,
    Th,
    Td,
   
    TableContainer,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/Data'

import { Select } from '@chakra-ui/react'


function Trackorder() {
const [data,setdata] = useState([])
let Authobj = useContext(AuthContext)
let {datafun} = Authobj
useEffect(()=>{

    let ndata =  JSON.parse(localStorage.getItem("Alldata"))
    setdata(ndata)
},[])


const handledelete=(id)=>{

let newdata = data.filter((item)=>{

return item.id!==id

})

setdata(newdata)
localStorage.setItem("Alldata",JSON.stringify(newdata))

  datafun()

}





  return (
    <div>
<Heading textAlign={"center"} color={"white"} textDecoration={"Highlight"}  mt={"50px"}>
<Highlight
    query='TRACK PRODUCT'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'black' ,color:"white" } }
  >
   TRACK PRODUCT

  </Highlight>
   </Heading>

   <Text>Sort By Price</Text>
   <Select
   mt={"50px"}
   mb={"50px"}
   
  bg='black'
  borderColor='black'
  color='white'
  
>
<option value='option1' style={{color:"white",backgroundColor:"black"}}>Low To High</option>
<option value='option1' style={{color:"white",backgroundColor:"black"}}>High To Low</option>

</Select>
   <TableContainer>
  <Table variant='striped' colorScheme='gray'>
    
    <Thead>
      <Tr>

        <Th>S.NO</Th>
        <Th>IMAGE</Th>
        <Th>ID</Th>
        <Th>NAME</Th>
        <Th>COLOR</Th>
        <Th>PRICE</Th>
        <Th>SIZE</Th>
        <Th>DESCRIPTION</Th>
        <Th>DELETE</Th>
      </Tr>
    </Thead>
    <Tbody>
     
     
       {data.map((item,i)=>{
        return <Tr key={item.id}>
<Td>{i+1}</Td>
<Td>
    <img width={"100px"} src={item.img} alt="" />
</Td>
<Td>{item.id}</Td>
<Td>{item.name}</Td>
<Td>{item.color}</Td>
<Td>${" "}{item.price} USD</Td>
<Td>{item.size}</Td>
<Td>{item.desc}</Td>
<Td color={"red"} onClick={()=>handledelete(item.id)} cursor={"pointer"}>
    {<DeleteIcon />}
</Td>

   </Tr>
       })}
        
       
      
    </Tbody>
  </Table>
</TableContainer>
        </div>
  )
}

export default Trackorder