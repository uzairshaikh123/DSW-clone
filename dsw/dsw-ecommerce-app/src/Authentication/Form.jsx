import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text,
  } from '@chakra-ui/react'
import { useState } from 'react'

function Formfun() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        
        <FormLabel color={"black"} fontSize={"20px"}>Email</FormLabel>
        <Input type='email' onChange={handleInputChange}  color={"black"}  />
       
          <FormErrorMessage>Email is required.</FormErrorMessage>
       
         <FormLabel color={"black"} fontSize={"20px"}>Password</FormLabel>
        <Input type='password' onChange={handleInputChange}  color={"black"} />
        
          <FormErrorMessage>Password is required.</FormErrorMessage>
       
         <span className='forget'>Forget Password</span>
         <br />
         <span className='forget'>Forget email</span>
        <button className='add' type="submit">Sign In</button>
      </FormControl>
    )
  }
export default Formfun