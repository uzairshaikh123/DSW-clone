import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
function TrackFeedback() {

let arr = JSON.parse(sessionStorage.getItem("feedback"))



  return (

    <div>
        
<TableContainer>
  <Table variant='striped' colorScheme='red'>
    <TableCaption>Fashion & Feet</TableCaption>
    <Thead>
      <Tr>
        <Th>Feedback</Th>
       </Tr>
    </Thead>
    <Tbody>
   
        {arr?.map((item)=>{

        return <Tr>
         <Th>{item}</Th> 
          </Tr>
        })}
    
    </Tbody>

  </Table>
</TableContainer>



    </div>
  )
}

export default TrackFeedback