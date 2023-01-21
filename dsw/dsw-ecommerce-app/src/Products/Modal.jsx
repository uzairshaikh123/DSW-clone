import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    GridItem,
    Heading,
  } from '@chakra-ui/react'
  import { json, useNavigate } from "react-router-dom";

import { useState } from 'react'
import Cart from '../CartPage.jsx/Cart';
import Item from 'antd/es/list/Item';
  

let arr = JSON.parse(localStorage.getItem("cartarr")) || []
function Modalfun({id,name,img,desc,price}) {
  const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count,setcount] = useState(1)
    const handleAdd=(id)=>{
      let quantity = count
     
      let obj ={
        id,
        quantity,
        price:price,
        img:img,
        desc:desc,
        name:name
      }
      
      
      let ndata = JSON.parse(localStorage.getItem("cartarr")) || []
    

if(ndata.length>1){
  let newdata = ndata.filter((item)=>{
    return item.id!==id
  })
    
      localStorage.setItem("cartarr",JSON.stringify([...newdata,obj]))

}else{
  arr.push(obj)
  localStorage.setItem("cartarr",JSON.stringify(arr))
}



    }
  
    return (
      <>
        <Button onClick={onOpen} variant='ghost' colorScheme='gray'>Quick Add</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
               {desc}
              </Text>
             <img src={img} alt="" />
             <Heading>{price}</Heading>
             
<button className='dec' onClick={()=>setcount(count-1)} >-</button>
<button className='dec' disabled>{count}</button>
<button className='dec' onClick={()=>setcount(count+1)}>+</button>
<Heading as='h3' size='lg'>
    Total Price : {count*price}
  </Heading>
            </ModalBody>
            
            <ModalFooter>
           
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='outline' onClick={()=>{
                
                
                handleAdd(id)
                onClose()
                
                }}>Add to Cart</Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modalfun