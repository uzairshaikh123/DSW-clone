import React from 'react'
import { Spinner, Stack } from '@chakra-ui/react'
function Loading() {
  return (
    <div>
<Stack direction='row' ml={"50%"} mt={"150px"} spacing={4} >
   
   <Spinner  size='xl' />
 </Stack>
    </div>
    
  )
}

export default Loading