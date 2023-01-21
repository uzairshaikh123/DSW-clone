import { DeleteIcon } from '@chakra-ui/icons'
import { Heading, Highlight } from '@chakra-ui/react'
import { Input } from 'antd'
import React from 'react'

function Delproduct() {

let data = JSON.parse(localStorage.getItem("Alldata"))

const handledelete=()=>{

data.filter(()=>{

})

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
<Input placeholder={"Enter the Id of Product"} style={{marginTop:"50px"}}></Input>
<button style={{color:"white",backgroundColor:"red",width:"200px",display:"block",margin:"auto",marginTop:"30px",height:"40px",padding:"10px"}} onClick={handledelete}>UPDATE</button>



    </div>
  )
}

export default Delproduct