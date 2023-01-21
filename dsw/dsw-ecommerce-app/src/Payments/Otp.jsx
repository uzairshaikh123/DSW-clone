import { HStack, PinInput, PinInputField } from '@chakra-ui/react'

import React from 'react'
import { useNavigate } from "react-router-dom";
function Otpfun() {
    const navigate = useNavigate();
const handlechange=(e)=>{
    if(e.target.value==4){


        setTimeout(()=>{
    alert("Purchase successfull")

    navigate('/trackorder')
},1000)

    }
}



  return (
    <HStack>
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField onChange={handlechange} />
    </PinInput>
  </HStack>
  )
}

export default Otpfun
