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
import { useState } from 'react'
  


function Modalfun({name,img,desc,price}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count,setcount] = useState(1)
  
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
              <Button variant='outline'>Add to Cart</Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modalfun